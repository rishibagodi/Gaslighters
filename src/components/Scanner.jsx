import { useState, useCallback, useRef } from 'react';
import useModel from '../hooks/useModel';
import useCamera from '../hooks/useCamera';
import preprocessImage from '../utils/preprocessImage';
import { mapPrediction } from '../logic/predictionMapper';

/* ─────────────────────────────────────────────────────────────────── */

/**
 * Scanner
 * Upload-box component that runs TF.js inference on a selected image.
 *
 * @param {{ onResult: (result: object) => void }} props
 */
export default function Scanner({ onResult }) {
  const { model, loading: modelLoading, error: modelError } = useModel();
  const { preview, handleFileUpload } = useCamera();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const fileRef = useRef(null);

  const [scanning,   setScanning]   = useState(false);
  const [scanError,  setScanError]  = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState(null);

  const stopCameraStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const closeCameraModal = useCallback(() => {
    stopCameraStream();
    setCameraOpen(false);
  }, [stopCameraStream]);

  const openCamera = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError('Camera API is not supported in this browser.');
      return;
    }

    setCameraError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });

      streamRef.current = stream;
      setCameraOpen(true);

      // Wait for modal/video to render before binding stream.
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {
            setCameraError('Unable to start camera preview.');
          });
        }
      }, 300);
    } catch (error) {
      setCameraError(error instanceof Error ? error.message : 'Unable to access camera.');
      stopCameraStream();
    }
  }, [stopCameraStream]);

  const openFilePicker = useCallback(() => {
    fileRef.current?.click();
  }, []);

  const captureFromCamera = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const attemptCapture = (didRetry) => {
      if (video.readyState < 2) {
        if (!didRetry) {
          setTimeout(() => attemptCapture(true), 200);
          return;
        }
        setCameraError('Camera is still warming up. Please try again.');
        return;
      }

      const width = video.videoWidth || 1280;
      const height = video.videoHeight || 720;
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext('2d');
      if (!context) return;
      context.drawImage(video, 0, 0, width, height);

      canvas.toBlob((blob) => {
        if (!blob) {
          setCameraError('Failed to capture image. Please try again.');
          return;
        }

        const capturedFile = new File([blob], 'capture.jpg', { type: blob.type || 'image/jpeg' });
        handleFileUpload({ target: { files: [capturedFile], value: '' } });
        closeCameraModal();
      }, 'image/jpeg', 0.95);
    };

    attemptCapture(false);
  }, [handleFileUpload, closeCameraModal]);

  /* ── Drag-and-drop handlers ── */
  const handleDragOver  = (e) => { e.preventDefault(); setIsDragOver(true);  };
  const handleDragLeave = ()  => setIsDragOver(false);
  const handleDrop      = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      // Reuse the camera hook's handler via a synthetic event-like object
      handleFileUpload({ target: { files: [file], value: '' } });
    }
  }, [handleFileUpload]);

  /* ── Core inference handler ── */
  const handleScan = useCallback(async () => {
    if (!model || !fileRef.current) return;

    // Grab the File from the hidden input is tricky after reset, so we derive
    // it from the preview object URL by fetching the blob back.
    if (!preview) return;

    setScanError(null);
    setScanning(true);

    let tensor = null;
    try {
      // Re-fetch the blob from the object URL we already hold
      const blob   = await fetch(preview).then((r) => r.blob());
      const file   = new File([blob], 'capture.jpg', { type: blob.type });

      // Preprocess → [1, 224, 224, 3]
      tensor = await preprocessImage(file);

      // Run inference
      const predictions = model.predict(tensor);
      if (!predictions || typeof predictions.data !== 'function') {
        throw new Error('Model output is not a tensor with a data() method');
      }

      const typedScores = await predictions.data();
      const scores = [...typedScores];

      if (typeof predictions.dispose === 'function') {
        predictions.dispose();
      }
      console.log('Scores:', scores);

      tensor.dispose();
      tensor = null;

      // Top class index
      const maxConfidence = Math.max(...scores);
      const topIndex = scores.indexOf(maxConfidence);

      if (maxConfidence < 0.7) {
        setScanError('Could not identify a crop disease. Please upload a clear photo of a plant leaf.');
        onResult?.(null);
        return;
      }

      const mapped = mapPrediction(topIndex, scores);

      onResult?.({
        ...mapped,
        // Preserve existing App/ResultCard expectations.
        label: mapped.disease,
        confidence: mapped.confidence * 100,
        treatment: Array.isArray(mapped.treatment) ? mapped.treatment.join(' ') : mapped.treatment,
        prevention: Array.isArray(mapped.prevention) ? mapped.prevention.join(' ') : mapped.prevention,
      });
    } catch (err) {
      console.error('[Scanner] Inference error:', err);
      setScanError(err instanceof Error ? err.message : String(err));
    } finally {
      tensor?.dispose();
      setScanning(false);
    }
  }, [model, preview, onResult, fileRef]);

  /* ── Derived UI states ── */
  const isReady    = !modelLoading && !modelError && !!model;
  const canScan    = isReady && !!preview && !scanning;

  /* ── Render ── */
  return (
    <div className="scanner-wrapper">

      {/* Model status banner */}
      {modelLoading && (
        <div className="status-banner status-banner--loading">
          <span className="spinner" aria-hidden="true" />
          Loading AI model…
        </div>
      )}
      {modelError && (
        <div className="status-banner status-banner--error">
          ⚠ Model failed to load: {modelError.message}
        </div>
      )}

      {/* Hidden upload input + hidden capture canvas */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} aria-hidden="true" />

      {/* Upload / Preview box */}
      <div
        className={`upload-box ${isDragOver ? 'upload-box--dragover' : ''} ${preview ? 'upload-box--has-preview' : ''}`}
        onClick={!preview ? openFilePicker : undefined}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role={!preview ? 'button' : undefined}
        tabIndex={!preview ? 0 : undefined}
        onKeyDown={(e) => { if (!preview && (e.key === 'Enter' || e.key === ' ')) openFilePicker(); }}
        aria-label={!preview ? 'Upload or drag an image' : 'Image preview'}
      >
        {preview ? (
          <img
            src={preview}
            alt="Selected crop"
            className="upload-box__preview"
          />
        ) : (
          <div className="upload-box__placeholder">
            <svg className="upload-box__icon" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0
                   0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="upload-box__label">Tap or drag to upload a crop image</p>
            <p className="upload-box__sublabel">JPG, PNG, WEBP · max 10 MB</p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="scanner-actions">
        <div className="scanner-actions__row">
          <button
            className="btn btn--secondary"
            onClick={openCamera}
            disabled={scanning}
            aria-label="Capture image with camera"
          >
            Use Camera
          </button>

          <button
            className="btn btn--secondary"
            onClick={openFilePicker}
            disabled={scanning}
            aria-label="Upload photo from files"
          >
            Upload Photo
          </button>
        </div>

        <button
          className={`btn btn--primary scanner-actions__scan ${scanning ? 'btn--loading' : ''}`}
          onClick={handleScan}
          disabled={!canScan}
          aria-busy={scanning}
          aria-label={scanning ? 'Scanning…' : 'Scan crop'}
        >
          {scanning ? (
            <>
              <span className="spinner spinner--sm" aria-hidden="true" />
              Scanning…
            </>
          ) : (
            'Scan Crop'
          )}
        </button>
      </div>

      {/* Inference error */}
      {scanError && (
        <p className="scan-error" role="alert">
          ⚠ {scanError}
        </p>
      )}

      {/* Camera modal */}
      {cameraOpen && (
        <div className="camera-modal" role="dialog" aria-modal="true" aria-label="Camera capture">
          <div className="camera-modal__panel">
            <video
              ref={videoRef}
              className="camera-modal__video"
              style={{ transform: 'scaleX(-1)' }}
              playsInline
              muted
              autoPlay
              onLoadedMetadata={() => {
                videoRef.current?.play().catch(() => {
                  setCameraError('Unable to start camera preview.');
                });
              }}
              onCanPlay={() => {
                videoRef.current?.play().catch(() => {
                  setCameraError('Unable to start camera preview.');
                });
              }}
            />
            <div className="camera-modal__actions">
              <button
                className="btn btn--primary camera-modal__btn camera-modal__btn--capture"
                type="button"
                onClick={captureFromCamera}
              >
                Capture
              </button>
              <button
                className="btn btn--secondary camera-modal__btn camera-modal__btn--cancel"
                type="button"
                onClick={closeCameraModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {cameraError && (
        <p className="scan-error" role="alert">
          ⚠ {cameraError}
        </p>
      )}
    </div>
  );
}

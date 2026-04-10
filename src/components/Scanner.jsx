import { useState, useCallback } from 'react';
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
  const { preview, handleFileUpload, triggerUpload, fileRef } = useCamera();

  const [scanning,   setScanning]   = useState(false);
  const [scanError,  setScanError]  = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
      const topIndex = scores.indexOf(Math.max(...scores));

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

      {/* Hidden file input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* Upload / Preview box */}
      <div
        className={`upload-box ${isDragOver ? 'upload-box--dragover' : ''} ${preview ? 'upload-box--has-preview' : ''}`}
        onClick={!preview ? triggerUpload : undefined}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role={!preview ? 'button' : undefined}
        tabIndex={!preview ? 0 : undefined}
        onKeyDown={(e) => { if (!preview && (e.key === 'Enter' || e.key === ' ')) triggerUpload(); }}
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
        {preview && (
          <button
            className="btn btn--secondary"
            onClick={triggerUpload}
            disabled={scanning}
            aria-label="Choose a different image"
          >
            Change Image
          </button>
        )}

        <button
          className={`btn btn--primary ${scanning ? 'btn--loading' : ''}`}
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
    </div>
  );
}

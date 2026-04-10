import { useState, useRef, useCallback } from 'react';

/**
 * useCamera
 * Manages a hidden <input type="file"> for camera / gallery image capture.
 *
 * @returns {{
 *   preview:         string | null,   // object URL of the selected image
 *   fileRef:         React.RefObject, // attach to <input> element
 *   handleFileUpload: (e: Event) => void, // onChange handler for the input
 *   triggerUpload:   () => void,      // programmatically opens the file picker
 * }}
 */
function useCamera() {
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  /**
   * Called when the user selects a file.
   * Revokes the previous object URL to avoid memory leaks, then
   * creates a new one for the selected image.
   */
  const handleFileUpload = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Release the previous blob URL if one exists
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Reset the input so the same file can be re-selected if needed
    e.target.value = '';
  }, []);

  /**
   * Programmatically opens the file / camera picker.
   */
  const triggerUpload = useCallback(() => {
    fileRef.current?.click();
  }, []);

  return { preview, handleFileUpload, triggerUpload, fileRef };
}

export default useCamera;

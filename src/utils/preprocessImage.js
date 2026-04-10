import * as tf from '@tensorflow/tfjs';

/**
 * preprocessImage
 * Loads an image File into an HTMLImageElement, converts it to a
 * TensorFlow.js tensor, resizes to 224×224, normalizes pixel values
 * to [0, 1], and adds a batch dimension → shape [1, 224, 224, 3].
 *
 * ⚠️  Caller is responsible for disposing the returned tensor after use:
 *       tensor.dispose();
 *
 * @param {File} file - An image file (e.g. from <input type="file">)
 * @param {number} [targetSize=224] - Target width & height
 * @returns {Promise<tf.Tensor4D>} Batched, normalized image tensor
 */
async function preprocessImage(file, targetSize = 224) {
  // 1. Create an object URL and load it into an HTMLImageElement
  const objectUrl = URL.createObjectURL(file);

  const img = await new Promise((resolve, reject) => {
    const el = new Image();
    el.onload  = () => resolve(el);
    el.onerror = (err) => reject(new Error(`Failed to load image: ${err}`));
    el.src = objectUrl;
  });

  // Always revoke the object URL — the Image element has already decoded it
  URL.revokeObjectURL(objectUrl);

  // 2. Convert → resize → normalize → add batch dim, all inside tf.tidy
  //    tf.tidy disposes every intermediate tensor automatically.
  //    The *return value* of tidy is NOT disposed, so the caller receives it.
  const tensor = tf.tidy(() => {
    // tf.browser.fromPixels: HTMLImageElement → Tensor3D [H, W, 3], dtype int32
    const raw = tf.browser.fromPixels(img);

    // Resize to [targetSize, targetSize, 3]
    const resized = tf.image.resizeBilinear(raw, [targetSize, targetSize]);

    // Cast to float32 and normalize to [0, 1]
    const normalized = resized.toFloat().div(tf.scalar(255));

    // Add batch dimension → [1, targetSize, targetSize, 3]
    return normalized.expandDims(0);
  });

  return tensor; // shape: [1, 224, 224, 3], dtype: float32
}

export default preprocessImage;

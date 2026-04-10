import * as tf from '@tensorflow/tfjs';

/**
 * MOCK useModel
 * Returns a fake model whose predict() outputs a tensor of 38 values
 * with index 15 as the highest score.
 *
 * Replace this entire file with the real tf.loadLayersModel() version
 * once the model file is available at /model/model.json.
 */

const NUM_CLASSES = 38;
const TOP_INDEX   = 15;

/** Build a fixed Float32Array of length 38 where index 15 wins. */
function makeMockScores() {
  const scores = new Float32Array(NUM_CLASSES).fill(0.01);
  scores[TOP_INDEX] = 0.92;          // dominant class
  scores[(TOP_INDEX + 3) % NUM_CLASSES] = 0.04; // runner-up noise
  return scores;
}

const mockModel = {
  /**
   * predict(tensor) → tf.Tensor1D  [NUM_CLASSES]
   * Mirrors the real model.predict() API so Scanner.jsx needs zero changes.
   */
  predict(_inputTensor) {
    return tf.tensor1d(makeMockScores());
  },
};

/**
 * useModel
 * @returns {{ model: object, loading: boolean, error: null }}
 */
function useModel() {
  return {
    model:   mockModel,
    loading: false,
    error:   null,
  };
}

export default useModel;

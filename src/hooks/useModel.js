const NUM_CLASSES = 38;
const TOP_INDEX = 15;

function makeMockScores() {
  const scores = Array(NUM_CLASSES).fill(0);
  scores[TOP_INDEX] = 0.95;
  return scores;
}

const mockModel = {
  predict() {
    return makeMockScores();
  },
};

function useModel() {
  return {
    model: mockModel,
    loading: false,
    error: null,
  };
}

export default useModel;

import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function useModel() {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadModel() {
      try {
        const loadedModel = await tf.loadLayersModel('/model/model.json');
        if (!isMounted) return;
        setModel(loadedModel);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadModel();

    return () => {
      isMounted = false;
    };
  }, []);

  return { model, loading, error };
}

export default useModel;

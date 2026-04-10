import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setChargement(true);
    setErreur(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        if (err.name !== 'AbortError') setErreur(err);
      })
      .finally(() => setChargement(false));

    return () => controller.abort();
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;
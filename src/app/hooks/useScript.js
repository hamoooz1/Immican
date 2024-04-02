import { useEffect, useState } from 'react';

const useScript = (url, dependsOn) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!dependsOn) {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => setLoaded(true);
      script.onerror = () => {
        console.error(`The script ${url} failed to load.`);
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [url, dependsOn]);

  return loaded;
};

export default useScript;
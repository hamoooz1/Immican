import { useState } from 'react';

function usePost(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { send, isLoading, error };
}

export default usePost;
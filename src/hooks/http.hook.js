import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, headers, method = "GET", body = null) => {
      setLoading(true);

      try {
        let headersOBJ;

        if (headers === true) {
          headersOBJ = { "Content-Type": "application/json" };
        }

        const response = await fetch(url, { method, body, headersOBJ });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

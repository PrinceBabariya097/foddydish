import { useRef, useCallback } from 'react';

function useThrottle(callback, limit) {
  const lastCall = useRef(0);

  return useCallback((...args) => {
    const now = Date.now();
    if (now - lastCall.current >= limit) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, limit]);
}

export default useThrottle;

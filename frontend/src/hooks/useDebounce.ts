import { useEffect, useRef } from "react";

type Func = (...params: any[]) => void;

function useDebounce(): (func: Func, timeout: number) => Func {
  // eslint-disable-next-line no-undef
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentTimeoutId = timeoutId.current;

    return () => {
      if (currentTimeoutId) {
        clearTimeout(currentTimeoutId);
      }
    };
  }, []);

  function debounce(func: Func, timeout: number) {
    const debounceFunc: Func = (...params) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => func(...params), timeout);
    };

    return debounceFunc;
  }

  return debounce;
}

export default useDebounce;

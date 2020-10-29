import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

interface UseWindowResizeReturn {
  width: number;
  height: number;
}

function useWindowResize(): UseWindowResizeReturn {
  const [windowSize, setWindowSize] = useState<UseWindowResizeReturn>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const debounce = useDebounce();

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const handleResizeDebounce = debounce(handleResize, 500);

    window.addEventListener("resize", handleResizeDebounce);

    return () => window.removeEventListener("resize", handleResizeDebounce);
  });

  return windowSize;
}

export default useWindowResize;

import { useState, useEffect } from "react";

interface UseWindowResizeReturn {
  width: number;
  height: number;
}

function useWindowResize(): UseWindowResizeReturn {
  const [windowSize, setWindowSize] = useState<UseWindowResizeReturn>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}

export default useWindowResize;

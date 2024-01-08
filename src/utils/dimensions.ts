export const MOBILE_BREAK_POINT = "890px";
export const TABLETTE_BREAK_POINT = "1020px";
export const SIDEBAR_BREAK_POINT = "1160px";

import { useState, useEffect } from "react";

export default function useDimensions(): DimensionsProps | undefined {
  const [windowDimensions, setWindowDimensions] = useState<DimensionsProps>();

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }

    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

interface DimensionsProps {
  width: number;
  height: number;
}

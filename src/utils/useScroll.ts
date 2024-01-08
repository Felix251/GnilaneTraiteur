import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [pageYOffset, setPageYOffset] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window?.scrollY);
    setPageYOffset(window?.pageYOffset);
  }, []);

  useEffect(() => {
    onScroll();
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true } as EventListenerOptions);
    };
  }, [onScroll]);

  return { pageYOffset, scrollY };
};

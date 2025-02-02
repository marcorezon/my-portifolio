import { useState, useEffect } from "react";

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function applySizes(): ScreenSize {
  return {
    isMobile: window.innerWidth < 640,
    isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
  };
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window !== "undefined") {
      return applySizes();
    }
    return { isMobile: false, isTablet: false, isDesktop: false };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize(applySizes());
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenSize;
}

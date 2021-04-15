import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [leftToScroll, setLeftToScroll] = useState(0);

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
    setPageHeight(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  };
  // every time the scrollTop is changes setLeftToScroll to the division of the scrollTop from pageHeight
  useEffect(() => {
    setLeftToScroll((scrollTop / pageHeight) * 100);
  }, [scrollTop, pageHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrollTop,
    setScrollTop,
    pageHeight,
    leftToScroll,
  };
};

export default useScroll;

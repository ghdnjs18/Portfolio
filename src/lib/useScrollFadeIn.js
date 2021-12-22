import { useCallback, useEffect, useRef } from "react";

const useScrollFadeIn = (
  direction = "up",
  duration = 1,
  delay = 0,
  length = 50
) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return `translate(0, ${length}%)`;
      case "down":
        return `translate(0, -${length}%)`;
      case "left":
        return `translate(${length}%, 0)`;
      case "right":
        return `translate(-${length}%, 0)`;
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        current.style.transitionProperty = "opacity transform";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate(0, 0)";
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;

import { useCallback, useEffect, useRef } from "react";

const useScrollFadeIn = (
  direction = "up",
  duration = 1,
  delay = 0,
  length = 50,
  threshold = 0.7
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
      // ref가 설정된 태그
      const { current } = dom;
      // 해당 태그의 isIntersecting이 true일 경우, 즉 화면안에 들어왔을 경우
      // 해당 태그의 스타일을 변경시킨다.
      if (entry.isIntersecting) {
        current.style.transitionProperty = "opacity transform";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate(0, 0)";
      }
    },
    // useCallback은 state나 props를 사용할 경우 deps로 무조건 넣어줘야한다.
    [duration, delay]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    // ref설정된 태그가 있다면,
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: threshold });
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

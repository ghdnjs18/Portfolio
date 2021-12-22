import React, { useCallback, useEffect, useRef } from "react";
import { useScrollFadeIn } from "../lib";

import "./About.css";

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0, 30),
    1: useScrollFadeIn("right", 1, 0.3, 300),
    2: useScrollFadeIn(),
    3: useScrollFadeIn(),
    4: useScrollFadeIn(),
  };

  return (
    <div className="about">
      <div className="about-title" {...animatedItem[0]}>
        About
      </div>
      <div className="bar-container">
        <div className="about-bar" {...animatedItem[1]}></div>
      </div>
      <div className="about-contents">
        <div className="about-content" {...animatedItem[2]}>
          <div className="about-sub-title">서브 타이틀?</div>
          <p>
            내요옹ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </p>
        </div>
        <div className="about-content" {...animatedItem[3]}>
          <div className="about-sub-title">서브 타이틀?</div>
          <p>
            내요옹ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </p>
        </div>
        <div className="about-content" {...animatedItem[4]}>
          <div className="about-sub-title">서브 타이틀?</div>
          <p>
            내요옹ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

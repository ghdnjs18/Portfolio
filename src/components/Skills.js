import React from "react";
import { useScrollFadeIn } from "../lib";

import "./Skills.css";

const Skills = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0, 30),
    1: useScrollFadeIn("right", 1, 0, 35),
    2: useScrollFadeIn("left", 1, 0, 35),
    3: useScrollFadeIn("right", 1, 0, 35),
    4: useScrollFadeIn("left", 1, 0, 35),
    5: useScrollFadeIn("right", 1, 0, 35),
    6: useScrollFadeIn("left", 1, 0, 35),
    7: useScrollFadeIn("right", 1, 0, 35),
    8: useScrollFadeIn("left", 1, 0, 35),
    9: useScrollFadeIn("right", 1, 0, 35),
    10: useScrollFadeIn("left", 1, 0, 35),
  };

  return (
    <div className="skills">
      <div className="skills-title" {...animatedItem[0]}>
        Skills
      </div>
      <div className="front-end" {...animatedItem[1]}>
        <h2>Java</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[2]}>
        <h2>Python</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[3]}>
        <h2>C</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[4]}>
        <h2>JavaScript</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[5]}>
        <h2>HTML5</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[6]}>
        <h2>CSS3</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[7]}>
        <h2>React</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[8]}>
        <h2>SpringFrameWork</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[9]}>
        <h2>Github</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
      <div className="front-end" {...animatedItem[10]}>
        <h2>Github</h2>
        <div className="progress-bar">
          <div className="progress-bar__bar"></div>
        </div>
        <div>
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
          내용입니다.
        </div>
      </div>
    </div>
  );
};

export default Skills;

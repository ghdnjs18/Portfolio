import React from "react";
import { useScrollFadeIn } from "../lib";

import "./Skills.css";

const Skills = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0, 30),
    1: useScrollFadeIn("right", 1, 0.3, 300),
    2: useScrollFadeIn("right", 1, 0, 35),
    3: useScrollFadeIn("left", 1, 0, 35),
    4: useScrollFadeIn("right", 1, 0, 35),
    5: useScrollFadeIn("left", 1, 0, 35),
    6: useScrollFadeIn("right", 1, 0, 35),
    7: useScrollFadeIn("left", 1, 0, 35),
    8: useScrollFadeIn("right", 1, 0, 35),
    9: useScrollFadeIn("left", 1, 0, 35),
    10: useScrollFadeIn("right", 1, 0, 35),
    11: useScrollFadeIn("left", 1, 0, 35),
  };

  return (
    <div className="skills">
      <div className="skills-title" {...animatedItem[0]}>
        Skills
      </div>
      <div className="bar-container">
        <div className="skill-bar" {...animatedItem[1]}></div>
      </div>
      <div className="skill-contatiner">
        <div className="skill-content" {...animatedItem[2]}>
          <h2>Java</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-1">
              <span>70%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[3]}>
          <h2>Python</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-2">
              <span>60%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[4]}>
          <h2>C</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-3">
              <span>50%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[5]}>
          <h2>JavaScript</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-4">
              <span>60%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[6]}>
          <h2>HTML5</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-5">
              <span>50%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[7]}>
          <h2>CSS3</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-6">
              <span>40%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[8]}>
          <h2>React</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-7">
              <span>60%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[9]}>
          <h2>SpringFrameWork</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-8">
              <span>50%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[10]}>
          <h2>Github</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-9">
              <span>60%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[11]}>
          <h2>Github</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-10">
              <span>70%</span>
            </div>
          </div>
          <div>
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
            내용입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

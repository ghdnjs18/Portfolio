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
          <div className="about-sub-title">나는 어떤 사람인가?</div>
          <p>
            저는 미래를 결정함에 있어 정작 본인이 무엇을 원하는지 무엇을 하고
            싶은지 결정을 하지 못하고 있었습니다. 인생을 결정해야 하는 기로에
            섰을 때, 나는 무엇을 잘 할 수 있을까? 나의 장점은 무엇일까? 나는
            어떤 사람일까? 생각해보았습니다. 🤔
          </p>
          <p>
            저는 가부장적인 가정에서 평범함을 강요받았습니다. 이러한 영향인지
            저는 주어진 틀에서 벗어나 색다른 관점에서 생각해보려고 노력하거나
            남들과는 다른 것을 해보는 것을 즐겨했습니다. 색다른 경험을 할 수
            있다면 찾아서 해보고, 도전해보려고 했습니다.
          </p>
        </div>
        <div className="about-content" {...animatedItem[3]}>
          <div className="about-sub-title">왜 개발자가 되기로 하였는가?</div>
          <p>
            늦은 나이에 시작한 개발자의 길이 멀고 힘겹기는 하지만 제가 행복할 수
            있고, 원하는 길이라 끝까지 도전할 것입니다.
          </p>
          <p>
            저는 가부장적인 가정에서 평범함을 강요받았습니다. 이러한 영향인지
            저는 주어진 틀에서 벗어나 색다른 관점에서 생각해보려고 노력하거나
            남들과는 다른 것을 해보는 것을 즐겨했습니다. 색다른 경험을 할 수
            있다면 찾아서 해보고, 도전해보려고 했습니다.
          </p>
        </div>
        <div className="about-content" {...animatedItem[4]}>
          <div className="about-sub-title">앞으로는 어떻게 할 것인가?</div>
          <p>
            이때부터 저는 한 부트캠프에서 자기주도형 학습방법을 배우게 됩니다.
            내가 모르는 것은 내가 스스로 찾아서 해결해야 했고, 힘들었지만 어느덧
            프로젝트를 만들 수 있는 힘이 생겼습니다. 프로젝트를 진행하면서
            개발자는 코드를 잘 치는 것도 중요하지만 협업을 위해 커뮤니케이션도
            중요하다는 사실을 깨닫습니다. 팀원들과의 커뮤니케이션을 통해 초반
            기획의 중요성과 진행하면서의 소통에 대해 배웠습니다.
          </p>
          <p>
            꾸준히 성장할 수 있는 개발자,독특한 개발자,함께 일하고 싶은 개발자가
            되는 것이 목표입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

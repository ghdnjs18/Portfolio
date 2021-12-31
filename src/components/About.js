import React, { useCallback, useEffect, useRef } from "react";
import { useScrollFadeIn } from "../lib";

import "./About.css";

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0, 30),
    1: useScrollFadeIn("right", 1, 0.3, 300),
    2: useScrollFadeIn("right", 1, 0, 30),
    3: useScrollFadeIn(),
    4: useScrollFadeIn(),
    5: useScrollFadeIn(),
  };

  return (
    <div className="about">
      <div className="about-title" {...animatedItem[0]}>
        About Me
      </div>
      <div className="bar-container">
        <div className="about-bar" {...animatedItem[1]}></div>
      </div>
      <div className="about-comment" {...animatedItem[2]}>
        "안녕하세요. 늦었지만 느리지 않은 신입 개발자가 되고 싶은 김호원입니다."
      </div>
      <div className="about-contents">
        <div className="about-content" {...animatedItem[3]}>
          <div className="about-sub-title">나는 어떤 사람인가?</div>
          <p>
            여러 가지 일들을 했었습니다. 저는 무언가를 만드는것을 좋아하고 수수께끼(어려운 문제?)를 푸는 것을
            좋아하고 그를 통해 사람들이 사용하고 추억을 가질 수 있는 물건을 하는? 것을 했는데? 기존에 일들은 
            부족함을 느꼈습니다. 그러던 도중 프로그래밍을 접하게 되었고 좀 더 나와 맞는다고 생각했다.
          </p>
          <p>
            이전 회사들에서 그래픽 작업, 문서작업 및 현장 작업 등을 하면서 다양한 업무를 가리지 않고 열정을 
            다해 열심히 했습니다.
            이러한 경험은 저에게 새로운 일들과 조직 생활에 빠르게 적응하는 적응력을 길러주었습니다. 
            또한, 현장에서 다양한 사람들을 접촉한 경험을 통해서 원만한 인간관계, 소통을 할 수 있었습니다. 
          </p>
        </div>
        <div className="about-content" {...animatedItem[4]}>
          <div className="about-sub-title">개발자를 선택한 이유는?</div>
          <p>
          이전부터 계속 관심이 있던 프로그래밍을 다양한 매체를 통해서 독학을 해보았습니다.
           혼자서 공부를 해보니 흥미가 더 생겨 클론 코딩과 코딩테스트를 해보면서 
           시간이 오래 걸리고 풀지 못할 때도 있었지만, 코딩하면서 ???느끼고 개발자를 
           하는 것에 대해 확신을 하게 되었습니다.
          </p>
          <p>
          이후, 
           전문적인 실무교육의 필요성을 느껴 전문학교에서 국가에서 지원하는 교육과정을 듣게 
           되었습니다. 과정 중에 프로그램을 통해서 프로그램언어를 더욱 기반을 쌓고 다양한 
           라이브러리들을 배우면서 기존에 배웠던 것들을 정리하면서 문제들을 스스로 찾아서 해결할 수 있게 되었습니다. 
           프로젝트를 진행하면서 코딩 능력 뿐만 아니라 기획과 진행 과정에서 팀원들과의 소통의 중요성을 배웠습니다.
          </p>
        </div>
        <div className="about-content" {...animatedItem[5]}>
          <div className="about-sub-title">왜?</div>
          <p>
          제가 생각하는 개발자는 항상 궁금증을 가지고 있어야 한다고 생각합니다. 
          코드를 작성하거나 프로그램을 사용할 때 정확하게는 아니더라도 작동원리는 무엇인지, 
          어떤 작업을 하고 있는지 내가 이해하고 넘어갈 수 있어야 한다고 생각합니다.
          </p>
          <p>
          또한 오류가 나지 않더라도 "다른 방법으로는 할 수 없을까?", "더 편리하게 할 수 없을까?" 
          등의 질문을 자신에게 던질 줄 알아야 현재에 안주하지 않고 계속 발전할 수 있다고 생각합니다. 
          이렇게 항상 한 번 더 생각하는 자세를 가지기 위해 노력하고 이러한 자세 덕분에 다양한 문제들을 
          이해하는 능력이 향상되었고 해결할 수 있는 능력도 가질 수 있게 되었습니다. 
          </p>
          <p>
          항상 한곳에 머무르지 않고 꾸준히 발전할 수 있는 개발자의 자세로 임하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

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
            자바 기초에 대해서 공부하고, 간단한 알고리즘을 공부하였습니다.
            자바 기본적인 문법에 대해 알고 있으며, 간단한 라이브러리 및 디자인 패턴 사용을 해보았습니다.
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
            기본적인 문법과 기본적인 알고리즘을 공부하였습니다.
            BeautifulSoup을 이용하여 크롤링을 통해서 데이터추출하고
            다양한 라이브러리들을 사용해 간단한 시각화를 해보았습니다.
            다양한 라이브러리들과 tkinter를 사용해서 간단한 GUI앱들을 구현해보았습니다.

          </div>
        </div>
        <div className="skill-content" {...animatedItem[4]}>
          <h2>C</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-3">
              <span>40%</span>
            </div>
          </div>
          <div>
            C언어의 기초와 기본적인 문법을 책과 강의를 통해 공부하였습니다.
            간단한 입출력 프로그램, 계산기, 빙고 게임등의 코드를 작성해보았습니다.
            프로그래밍을 이해하는데 도움이 되어 간단한 알고리즘과 코딩 테스트를 통해 추가적으로 공부하고있습니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[5]}>
          <h2>JavaScript</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-4">
              <span>50%</span>
            </div>
          </div>
          <div>
            JavaScript의 기본 문법을 공부하고 다양한 이벤트처리를 통해서 프론트에 구동하도록 구현하였습니다.
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
            기본적인 문서 작성법과 태그사용법을 공부하였습니다.
            다양한 프로젝트를 진행시 웹 페이지를 만드는데 적절히 사용하였습니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[7]}>
          <h2>CSS3</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-6">
              <span>30%</span>
            </div>
          </div>
          <div>
            부트스트랩을 이용하여 프론트를 만들어보았고 css에 대한 이해가 부족하다고 생각되어
            부트스트랩을 사용하지 않고 직접 css를 구성하여 프론트를 꾸미면서 연습을 하고있습니다.
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
            리엑트 훅을 이용하여 컴포넌트를 구성하고 사이트를 구현해 보았습니다.
            API를 황용하여 사이트를 구성하고 협업하여 사이트를 만들어 보았습니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[9]}>
          <h2>SpringFrameWork</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-8">
              <span>40%</span>
            </div>
          </div>
          <div>
            스프링 부트를 이용해서 간단한 게시판을 구현해보았습니다.
            스프링에서 MVC패턴을 사용하여 간단한 사이트를 통해서 게시판 및 로그인 시스템을 만들어보았습니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[10]}>
          <h2>Github</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-9">
              <span>50%</span>
            </div>
          </div>
          <div>
            github를 이용해서 대부분의 프로젝트를 관리하였으며, 협업 프로젝트도 진행하였습니다.
            간단한 사이트는 github 서버를 통해서 관리를 하고있습니다.
          </div>
        </div>
        <div className="skill-content" {...animatedItem[11]}>
          <h2>DataBase</h2>
          <div className="progress-bar-container">
            <div className="progress-bar color-10">
              <span>50%</span>
            </div>
          </div>
          <div>
            CRUD의 기초를 이해하고 기본적인 활용법을 공부하였습니다.
            MySQL, MariaDB, Oracle, MongoDB등의 기본적인 사용방법을 공부하였습니다.
            다양한 DBMS를 이용하여 사이트 프로젝트에 연동하여 사용하였습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

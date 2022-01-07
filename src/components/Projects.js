import React from "react";
import { useScrollFadeIn } from "../lib";
import {
  FaChrome,
  FaCss3Alt,
  FaGithub,
  FaHome,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import { SiFirebase, SiHeroku, SiPython } from 'react-icons/si'
import projectImg1 from "../images/movieProject.jpg";
import projectImg2 from "../images/wordProject.jpg";
import projectImg3 from "../images/hotelProject.jpg";
import "./Projects.css";

const Projects = () => {
  const animatedItem = {
    0: useScrollFadeIn("right", 1, 0, 30),
    1: useScrollFadeIn("right", 1, 0.3, 300),
    2: useScrollFadeIn("right", 1, 0, 50, 0.5),
    3: useScrollFadeIn("right", 1, 0, 50, 0.5),
    4: useScrollFadeIn("right", 1, 0, 50, 0.5),
    5: useScrollFadeIn(),
    6: useScrollFadeIn(),
    7: useScrollFadeIn(),
    8: useScrollFadeIn(),
    9: useScrollFadeIn(),
  };
  return (
    <div className="projects">
      <div className="projects-title" {...animatedItem[0]}>
        Projects
      </div>
      <div className="bar-container">
        <div className="projects-bar" {...animatedItem[1]}></div>
      </div>
      <div className="project" {...animatedItem[2]}>
        <div className="project-title">영화 정보 사이트</div>
        <div className="project-period">2021.11 - 2021.11 (개인 프로젝트)</div>
        <div className="project-contents">
          <div className="project-img">
            <img src={projectImg1} alt="영화 정보 사이트" width="80%"/>
          </div>
          <p>
          간단한 영화에 대한 정보를 제공하는 웹 사이트입니다. 리엑트를 통해서 만들었으며, 
          API를 이용하여 영화 정보를 가져와서 출력할 수 있도록 구현하였습니다. 
          홈페이지가 있고 검색 기능과 정렬기능을 구현하였습니다.
          랭크 페이지를 추가하여 평점 높은 영화정보를 제공하고 클릭시 세션을 통해서 조회수를 좋아요 표시를
          통해서 많이 본 영화정보를 제공하도록 구현하였습니다. 로그인 시스템도 세션을 통해서 저장하는 형태로 구현하였습니다.
          파이어베이스를 이용해서 배포를 하였습니다.
          </p>
          <p>
          fetch함수를 통해서 API를 필요한 데이터로 받아서 사용하는 방법을 배울 수 있었습니다.
          데이터베이스를 사용하지않고 일회성이지만 sessionStorage를 이용해서 정보를 저장하여 사용하는 방법을 통해서
          세션에 배울 수 있었습니다.
          이 프로젝트를 진행하면서 API와 세션에 대한 이해를 높일수 있는 프로젝트였습니다.
          </p>
          <hr />
        </div>
        <div className="project-summary">
          <a href="https://github.com/ghdnjs18/netflix-school">
            <FaGithub size={40} color="black" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://netflix-clone-hoho.firebaseapp.com">
            <FaChrome size={40} color="black" />
          </a>
          <AiOutlineMore size={40} color="black" />
          <FaReact size={40} color="black" />
          <FaJsSquare size={40} color="black" />
          <FaCss3Alt size={40} color="black" />
          <SiFirebase size={40} color="black"/>
        </div>
      </div>
      <div className="project" {...animatedItem[3]}>
        <div className="project-title">단어 검색 사이트</div>
        <div className="project-period">2021.11 - 2021.11 (4인 프로젝트)</div>
        <div className="project-contents">
          <div className="project-img">
            <img src={projectImg2} alt="영화 정보 사이트" width='80%'/>
          </div>
          국어사전에 있는 단어 및 어미등을 검색할 수 있는 사이트입니다.
          국어대사전에 있는 단어들중 일부를 선택하여 단어에 대한 정보를 크롤링을 하여 MongoDB와 연동해서
          사용하였습니다. 단어, 의미, 품사등으로 검색할 수 있고 데이터베이스에 있는 검색어를 자동완성 시켜보여
          주도록 구현하였습니다. 처음에는 Java와 JavaScript 등으로 구현하였고, 이후에 리엑트로 리팩터링을
          시켜 히로쿠로 배포하여 깃허브에 연동하였습니다. 
          <br />
          <br />
          데이이터베이스와 연동해서 이벤트를 처리를 하는 방법을 하는 과정에서 서버와 연결하고 JavaScript에 개념에 
          대해 많이 배울 수 있었습니다. 검색 키워드를 변경하는 이벤트를 처리하는 과정에서 정규식을 배울수 있었습니다.
          완성이후에 리엑트로 다시 리펙토링을 하는 과정에서는 동일한 기능이라도 완전다른 방식으로 동작할 수 있다는 걸 알수있었습니다.
          JavaScript로 구현했던 기능들을 리엑트에서 구현하면서 리엑트에 대해서 더 많이 배우고 이해할 수 있었고
          다른 사람들과의 협업을 하면서 작업을 분배해서 진행하는 과정에서 다양하게 배울 수 있었던 프로젝트였습니다.
          <br />
          <br />
          <hr />
        </div>
        <div className="project-summary">
          <a href="https://github.com/ShinHyoHaeng/kor-dic-service">
            <FaGithub size={40} color="black" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://shinhyohaeng.github.io/kor-dic-service/">
            <FaChrome size={40} color="black" />
          </a>
          <AiOutlineMore size={40} color="black" />
          <SiPython size={40} color="black" />
          <FaHtml5 size={40} color="black" />
          <FaReact size={40} color="black" />
          <FaJsSquare size={40} color="black" />
          <FaCss3Alt size={40} color="black" />
          <SiHeroku size={40} color="black" />
        </div>
      </div>
      <div className="project" {...animatedItem[4]}>
        <div className="project-title">호텔 정보 사이트</div>
        <div className="project-period">2021.11 - 2121.12 (개인 프로젝트)</div>
        <div className="project-contents">
          <div className="project-img">
            <img src={projectImg3} alt="영화 정보 사이트" width='80%'/>
          </div>
          호텔을 검색하여 호텔에 대한 정보를 볼 수 있는 사이트입니다.
          일부 호텔들을 이용해서 검색이 가능하도록 만들었으며, 숙박 일정과 숙박 인원을 입력하여 검색할 수 있도록 하였습니다. 
          정보출력은 지도라이브러리를 이용해서 지도에 호텔위치를 표시하고 근처 호텔들의 정보를 리스트로 출력합니다. 
          사이드메뉴를 통해서 호텔에 필요한 특징을 검색할 수 있도록 필터를 구현하였습니다.
          호텔을 클릭해서 호텔에 대한 세부정보 페이지를 구현하였습니다.
          <br />
          <br />
          호텔스닷컴 사이트의 페이지를 보고 참조하여 리엑트를 사용해서 실제 있는 서비스의 기능을 비슷하게 
          만들어 보면서 사이트에 대한 작동원리를 이해할 수 있었고, 사이트를 구성하는 방법과 API활용을 배울 수 있었던 프로젝트였습니다.

          <br />
          <br />
          <hr />
        </div>
        <div className="project-summary">
          <a href="https://github.com/ghdnjs18/hotelApp">
            <FaGithub size={40} color="black" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://hotels-com-e93e0.firebaseapp.com">
            <FaHome size={40} color="black" />
          </a>
          <AiOutlineMore size={40} color="black" />
          <FaReact size={40} color="black" />
          <FaJsSquare size={40} color="black" />
          <FaCss3Alt size={40} color="black" />
          <SiFirebase size={40} color="black"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;

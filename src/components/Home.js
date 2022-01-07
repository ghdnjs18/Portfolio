import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("안녕하세요 !");
  const [tmpText, setTmpText] = useState([]);
  const [text2, setText2] = useState("저의 포토폴리오에 오신건 환영합니다.");
  const [tmpText2, setTmpText2] = useState([]);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setTmpText(tmpText + text[index]);
        setIndex(index + 1);
      }
      if (index >= text.length) {
        setTmpText2(tmpText2 + text2[index2]);
        setIndex2(index2 + 1);
      }
    }, 100);
    if (index2 === text2.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
    
  return (
    <div className="Home">
      <div className="home-container">
        <div className="home-contents">
          <div>{tmpText}</div><br/>
          <div>{tmpText2}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

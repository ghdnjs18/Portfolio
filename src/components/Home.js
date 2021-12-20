import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("포트폴리오입니다.");
  const [tmpText, setTmpText] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTmpText(tmpText + text[index]);
      setIndex(index + 1);
    }, 100);
    if (index === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="Home">
      <h1>{tmpText}</h1>
    </div>
  );
};

export default Home;

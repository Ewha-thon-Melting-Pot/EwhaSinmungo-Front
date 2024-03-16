import React from "react";
import "./StartPage.css"; // StatePage 컴포넌트 스타일을 불러옵니다.

const StartPage = () => {
  return (
    <div className="state-page">
      <div className="placeholder-box"></div>
      <p className="call-to-action">이화인의 목소리 들려주세요</p>
      <p className="hashtag">이화 신문고</p>
    </div>
  );
};

export default StartPage;

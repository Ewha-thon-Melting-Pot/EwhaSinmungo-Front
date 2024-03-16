import React from "react";

const ContentInfo = ({ designer, joinCount, joinPercentage, deadline }) => {
  const progressStyle = {
    width: `${joinPercentage}%`,
    backgroundColor: "green",
    height: "100%",
    borderRadius: "inherit",
  };

  return (
    <div className="content-info">
      <div className="designer-info">
        <p>Design by.</p>
        <p>
          <strong>{designer}</strong>
        </p>
      </div>
      <div className="group-join-info">
        <p>
          <strong>공구 진행 횟수</strong>
        </p>
        <p>{joinCount}회</p>
      </div>
      <div className="group-join-progress">
        <div className="progress-bar-background">
          <div className="progress-bar" style={progressStyle}></div>
        </div>
        <div className="progress-percentage">
          <p>진행 {joinPercentage}%</p>
        </div>
      </div>
      <div className="deadline-info">
        <p>마감</p>
        <p>
          <strong>{deadline}</strong>
        </p>
      </div>
    </div>
  );
};

export default ContentInfo;

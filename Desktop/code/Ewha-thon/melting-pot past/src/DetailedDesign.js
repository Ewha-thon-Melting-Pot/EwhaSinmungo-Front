import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SubTopNavBar from "./detailedPage/SubTopNavBar";
import ContentInfo from "./detailedPage/ContentInfo";

function DetailedDesign() {
  const contentData = {
    designer: "정길동",
    joinCount: 3,
    joinPercentage: 60,
    deadline: "03.31",
  };

  return (
    <div>
      <SubTopNavBar />
      <ContentInfo
        designer={contentData.designer}
        joinCount={contentData.joinCount}
        joinPercentage={contentData.joinPercentage}
        deadline={contentData.deadline}
      />
    </div>
  );
}

export default DetailedDesign;

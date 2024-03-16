import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNavBar from "./designPage/TopNavBar";
import MainContent from "./designPage/MainContent";
import BottomNavBar from "./designPage/BottomNavBar";
import AIButton from "./designPage/AIButton";
import SectionTitle from "./designPage/SectionTitle"; // 제목 컴포넌트 import

function Design() {
  return (
    <Router>
      <div>
        <TopNavBar />
        <SectionTitle title="best" />
        <MainContent />
        <SectionTitle title="new" />
        <MainContent />
        <BottomNavBar />
        <AIButton />
      </div>
    </Router>
  );
}

export default Design;

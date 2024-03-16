import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StartPage from "./startPage/StartPage";

function Start() {
  return (
    <Router>
      <div>
        <StartPage />
      </div>
    </Router>
  );
}

export default Start;

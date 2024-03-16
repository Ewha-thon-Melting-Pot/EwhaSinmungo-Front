import React from "react";
import styles from "./AIButton.module.css";

function AIButton() {
  const handleClick = () => {
    console.log("버튼이 클릭되었습니다.");
    // 버튼 클릭시 실행할 기능을 여기에 작성
  };

  return (
    <button className={styles.fab} onClick={handleClick}>
      공구링
    </button>
  );
}

export default AIButton;

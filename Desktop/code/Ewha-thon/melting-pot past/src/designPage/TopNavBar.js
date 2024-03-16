// TopNavBar.js
import React, { useState } from "react";
import styles from "./TopNavBar.module.css";

function TopNavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className={styles.topNav}>
        <h1 className={styles.title}>DESIGN</h1>
        <div className={styles.menuContainer}>
          <button className={styles.iconButton}>&#x1F514;</button>
          <button className={styles.iconButton} onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>
      <div className={styles.categoryNav}>
        <span>전체</span>
        <span>바람막이</span>
        <span>야구잠바</span>
        <span>티셔츠</span>
        <span>후드티</span>
      </div>

      {menuVisible && (
        <div className={styles.sideMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>{" "}
          {/* 닫기 버튼 */}
          {/* 메뉴 아이템들 */}
          <a href="#">디자인</a>
          <a href="#">공구 진행</a>
          <a href="#">마이페이지</a>
          {/* 기타 메뉴 아이템들 */}
        </div>
      )}
    </>
  );
}

export default TopNavBar;

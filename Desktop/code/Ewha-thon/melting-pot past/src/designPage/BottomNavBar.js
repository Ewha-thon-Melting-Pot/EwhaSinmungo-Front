// BottomNavBar.js
import React from "react";
import styles from "./BottomNavBar.module.css";

function BottomNavBar() {
  return (
    <footer className={styles.bottomNav}>
      <div className={styles.navItem}>
        {/* 각 아이콘에 대응되는 이미지나 아이콘을 적절히 넣어주세요 */}
        <span className={styles.icon}></span>
        <span className={styles.text}></span>
      </div>
      <div className={styles.navItem}>
        <span className={styles.icon}>🔍</span>
        <span className={styles.text}>검색</span>
      </div>
      <div className={styles.navItem}>
        <span className={styles.icon}>❤️</span>
        <span className={styles.text}>찜</span>
      </div>
      <div className={styles.navItem}>
        <span className={styles.icon}>🛍️</span>
        <span className={styles.text}>주문내역</span>
      </div>
      <div className={styles.navItem}>
        <span className={styles.icon}>👤</span>
        <span className={styles.text}>마이페이지</span>
      </div>
    </footer>
  );
}

export default BottomNavBar;

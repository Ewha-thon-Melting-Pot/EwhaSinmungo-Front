import React from "react";

const sectionTitleStyle = {
  margin: "10px 0", // 상단과 하단 여백
  paddingLeft: "10px", // 좌측 여백
  borderLeft: "3px solid green", // 좌측에 두꺼운 녹색 선
  fontSize: "1em", // 글자 크기
};

function SectionTitle({ title }) {
  return (
    <div style={sectionTitleStyle}>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;

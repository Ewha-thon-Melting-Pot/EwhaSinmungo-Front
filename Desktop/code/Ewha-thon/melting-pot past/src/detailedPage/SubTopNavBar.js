import React from "react";
import { FaArrowLeft, FaShoppingBag, FaUser } from "react-icons/fa";

const SubTopNavBar = ({ onBack, onCart, onProfile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <FaArrowLeft onClick={onBack} size={24} style={{ cursor: "pointer" }} />
      <div>
        <FaShoppingBag
          onClick={onCart}
          size={24}
          style={{ cursor: "pointer", margin: "0 15px" }}
        />
        <FaUser onClick={onProfile} size={24} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default SubTopNavBar;

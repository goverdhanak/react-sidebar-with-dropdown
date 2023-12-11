import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import "../../style/ToggleSideBaar.css"

const SideBarToggel = ({ OpenCloseSide }) => {


  return (
    <div style={{
      height: "100vh",
      width: "65px",
      position: "fixed",
      backgroundColor: "#233044",
    }}>
      <div style={{ paddingTop: "13px", padding: "13px" }}>
        <div className="my-3">
          <AiOutlineAlignLeft onClick={OpenCloseSide} size={30} cursor="pointer" color="#fff" />
        </div>
        <div>
          <AiOutlineAlignLeft size={30} cursor="pointer" color="#fff" />
        </div>
      </div>
    </div >
  );
};

export default SideBarToggel;

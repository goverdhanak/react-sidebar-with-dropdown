import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const SideBarToggel = ({ OpenCloseSide }) => {
  return (
    <div style={{ marginTop: "13px", marginLeft: "13px" }}>
      <AiOutlineAlignLeft onClick={OpenCloseSide} size={30} cursor="pointer" />
    </div>
  );
};

export default SideBarToggel;

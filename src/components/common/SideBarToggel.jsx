import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const SideBarToggel = ({ OpenCloseSide }) => {
  return (
    <div className="p-2">
      <AiOutlineAlignLeft onClick={OpenCloseSide} size={30} cursor="pointer" />
    </div>
  );
};

export default SideBarToggel;

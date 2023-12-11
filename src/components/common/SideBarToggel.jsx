import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import "../../style/ToggleSideBaar.css"
import { IoColorFilter, IoCompass, IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideBarToggel = ({ OpenCloseSide }) => {
  const navigate = useNavigate()

  return (
    <div style={{
      height: "100vh",
      width: "65px",
      position: "fixed",
      backgroundColor: "#233044",
    }}>
      <div style={{ paddingTop: "13px", padding: "13px" }}>
        <div className="mb-2">
          <AiOutlineAlignLeft onClick={OpenCloseSide} size={30} cursor="pointer" color="#fff" />
        </div>
        <br />
        <div>
          <IoColorFilter size={25}
            onClick={() => navigate('/location/dark/catchment/expansion')}
            cursor="pointer" color="#fff" />
        </div>
        <div className="my-4">
          <IoLocation size={25}
            onClick={() => navigate('/location/within/city/penetration')}
            cursor="pointer" color="#fff" />
        </div>
        <div>
          <IoCompass size={25}
            onClick={() => navigate('/location/new/city/expansion')}
            cursor="pointer" color="#fff" />
        </div>
      </div>
    </div >
  );
};

export default SideBarToggel;

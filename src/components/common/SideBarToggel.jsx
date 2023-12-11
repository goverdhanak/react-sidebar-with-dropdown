import React, { useEffect } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoColorFilter, IoCompass, IoLocation } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SideBarToggel = ({ OpenCloseSide }) => {
  const location = useLocation();

  useEffect(() => { }, [location]);
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
        <Link to="/location/dark/catchment/expansion">
          <IoColorFilter size={25}
            className={location.pathname === "/location/dark/catchment/expansion" ? "side_icons_style" : "side_icons_style1"}
          />
        </Link>
        <div className="my-4">
          <Link to="/location/within/city/penetration"
          >
            <IoLocation size={25}
              className={location.pathname === "/location/within/city/penetration" ? "side_icons_style" : "side_icons_style1"}
            />
          </Link>
        </div>
        <Link to="/location/new/city/expansion"
        >
          <IoCompass size={25}
            className={location.pathname === "/location/new/city/expansion" ? "side_icons_style" : "side_icons_style1"}
          />
        </Link>
      </div>
    </div >
  );
};

export default SideBarToggel;

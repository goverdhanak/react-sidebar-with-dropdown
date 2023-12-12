import Tippy from "@tippyjs/react";
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
        <Tippy content={<span className="text-blue bg-light p-3" >Dark Catchment</span>} placement="right">
          <Link to="/location/dark/catchment/expansion">
            <IoColorFilter size={25}
              className={location.pathname === "/location/dark/catchment/expansion" ? "active" : "side_icons_style"}
            />
          </Link>
        </Tippy>
        <div className="my-4">
          <Tippy content={<span className="text-blue bg-light p-3" >Within City</span>} placement="right">
            <Link to="/location/within/city/penetration"
            >
              <IoLocation size={25}
                className={location.pathname === "/location/within/city/penetration" ? "active" : "side_icons_style"}
              />
            </Link>
          </Tippy>
        </div>
        <Tippy content={<span className="text-blue bg-light p-3" >New City</span>} placement="right">
          <Link to="/location/new/city/expansion"
          >
            <IoCompass size={25}
              className={location.pathname === "/location/new/city/expansion" ? "active" : "side_icons_style"}
            />
          </Link>
        </Tippy>
      </div>
    </div >
  );
};

export default SideBarToggel;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import SideBarToggel from "../common/SideBarToggel";

const MainLayout = () => {
  const [openSide, setOpenSide] = useState(true);
  const OpenCloseSide = () => {
    setOpenSide(!openSide);
  };
  return (
    <div>
      {openSide === true ?
        <Sidebar OpenCloseSide={OpenCloseSide} /> : <SideBarToggel OpenCloseSide={OpenCloseSide} />
      }
      <div className={openSide === true ? "page_layout" : ""}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

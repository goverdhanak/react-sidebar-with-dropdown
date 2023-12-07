import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../common/Sidebar";
import SideBarToggel from "../common/SideBarToggel";

const MainLayout = () => {
  const [openSide, setOpenSide] = useState(true);
  const OpenCloseSide = () => {
    setOpenSide(!openSide);
  };
  return (
    <Box sx={openSide === true ? { display: "flex" } : ""}>
      <Box>
        {openSide === true ? (
          <Sidebar OpenCloseSide={OpenCloseSide} />
        ) : (
          <SideBarToggel OpenCloseSide={OpenCloseSide} />
        )}
      </Box>
      <Outlet />
    </Box>
  );
};

export default MainLayout;

import { Drawer, List, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem.jsx";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ OpenCloseSide }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List>
        <Toolbar>
          <div className="d-flex w-100 justify-content-between">
            <b>
              <h5>THIRD EYE</h5>
            </b>
            <AiOutlineClose
              size={25}
              onClick={OpenCloseSide}
              cursor="pointer"
            />
          </div>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

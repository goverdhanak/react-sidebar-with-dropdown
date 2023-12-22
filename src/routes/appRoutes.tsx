import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardPageLayout from "../pages/location/DashboardPageLayout";
import DashboardIndex from "../pages/location/DashboardIndex";
import DarkCatchmentExansion from "../pages/location/DarkCatchmentExansion";
import WithinCityExpansion from "../pages/location/WithinCityExpansion";
import NewCityExpansion from "../pages/location/NewCityExpansion";
import { IoColorFilter, IoCompass, IoLocation } from "react-icons/io5";
import { homelink } from "../tabluea/TablueLink";


const appRoutes: RouteType[] = [
  {
    path: homelink,
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/location",
    element: <DashboardPageLayout />,
    state: "location",
    sidebarProps: {
      displayText: "Location",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "location.index"
      },
      {
        path: "/location/dark/catchment/expansion",
        element: <DarkCatchmentExansion />,
        state: "location.dark_catchment_expansion",
        sidebarProps: {
          displayText: "Dark Catchment Expansion",
          icon: <IoColorFilter size={20} />
        },
      },
      {
        path: "/location/within/city/penetration",
        element: <WithinCityExpansion />,
        state: "location.whithin_city_expansion",
        sidebarProps: {
          displayText: "Within City Penetration",
          icon: <IoLocation size={20} />
        }
      },
      {
        path: "/location/new/city/expansion",
        element: <NewCityExpansion />,
        state: "location.new_city_expansion",
        sidebarProps: {
          displayText: "New City Expansion",
          icon: <IoCompass size={20} />
        }
      }
    ]
  },

  // FOR FUTURE REFRENCE
  // {
  //   path: "/component",
  //   element: <ComponentPageLayout />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/component/alert",
  //       element: <AlertPage />,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //       path: "/component/button",
  //       element: <ButtonPage />,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/documentation",
  //   element: <DocumentationPage />,
  //   state: "documentation",
  //   sidebarProps: {
  //     displayText: "Documentation",
  //     icon: <ArticleOutlinedIcon />
  //   }
  // },
];

export default appRoutes;
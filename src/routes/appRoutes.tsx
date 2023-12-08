import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DarkCatchmentExansion from "../pages/dashboard/DarkCatchmentExansion";
import WithinCityExpansion from "../pages/dashboard/WithinCityExpansion";
import NewCityExpansion from "../pages/dashboard/NewCityExpansion";

const appRoutes: RouteType[] = [
  {
    path: "/third_eye",
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
          displayText: "Dark Catchment Expansion"
        },
      },
      {
        path: "/location/within/city/expansion",
        element: <WithinCityExpansion />,
        state: "location.whithin_city_expansion",
        sidebarProps: {
          displayText: "Within City Expansion"
        }
      },
      {
        path: "/location/new/city/expansion",
        element: <NewCityExpansion />,
        state: "location.new_city_expansion",
        sidebarProps: {
          displayText: "New City Expansion"
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
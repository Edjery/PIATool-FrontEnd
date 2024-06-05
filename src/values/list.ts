import {
  IconDataScheme,
  IconHome,
  IconLogout,
  IconRecommendation,
  IconReport,
  IconSettings,
  IconWarning,
} from "./icons";
import NavigationList from "./interface/NavigationList";

export const userNavigationList: NavigationList[] = [
  { name: "Home", icon: IconHome, url: "/home" },
  { name: "Reports", icon: IconReport, url: "/reports" },
  { name: "Logout", icon: IconLogout, url: "/logout" },
];

export const adminNavigationList: NavigationList[] = [
  { name: "Home", icon: IconHome, url: "/home" },
  { name: "Reports", icon: IconReport, url: "/reports" },
  { name: "Threats", icon: IconWarning, url: "/threats" },
  { name: "Data Flow", icon: IconDataScheme, url: "/dataflow" },
  {
    name: "Recommendations",
    icon: IconRecommendation,
    url: "/recommendations",
  },
  { name: "Maintenance", icon: IconSettings, url: "/maintenance" },
  { name: "Logout", icon: IconLogout, url: "/logout" },
];

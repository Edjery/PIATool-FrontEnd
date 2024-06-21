import { createBrowserRouter } from "react-router-dom";
import Assessment from "../components/mainContent/Assessment";
import UserHomePage from "../components/mainContent/UserHomePage";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <UserHomePage />,
      },
      {
        path: "/assessment",
        element: <Assessment />,
      },
    ],
  },
]);

export default router;

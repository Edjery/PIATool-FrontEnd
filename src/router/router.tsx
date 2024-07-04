import { createBrowserRouter } from "react-router-dom";
import Assessment from "../components/pages/Assessment";
import UserHomePage from "../components/pages/UserHomePage";
import ErrorPage from "../components/pages/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import ReportList from "../components/pages/ReportList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UserHomePage />,
      },
      {
        path: "/assessment",
        element: <Assessment />,
      },
      {
        path: "/reports",
        element: <ReportList />,
      },
    ],
  },
]);

export default router;

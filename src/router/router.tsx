import { createBrowserRouter } from "react-router-dom";
import Assessment from "../components/pages/Assessment";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import ReportList from "../components/pages/ReportList";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/assessment",
        element: <Assessment />,
      },
      {
        path: "/reports",
        element: <ReportList />,
      },
      {
        path: "/reported",
        element: <ReportList />,
      },
      {
        path: "/reporters",
        element: <Assessment />,
      },
    ],
  },
]);

export default router;

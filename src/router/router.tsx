import { createBrowserRouter } from "react-router-dom";
import Assessment from "../components/pages/Assessment";
import UserHomePage from "../components/pages/UserHomePage";
import ErrorPage from "../components/pages/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";

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
    ],
  },
]);

export default router;

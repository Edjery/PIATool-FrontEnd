import { createBrowserRouter } from "react-router-dom";
import Assessment from "../components/mainContent/Assessment";
import UserHomePage from "../components/mainContent/UserHomePage";
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

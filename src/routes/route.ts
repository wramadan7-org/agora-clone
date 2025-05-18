import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";

const routers = createBrowserRouter([
  {
    Component: DashboardLayout,
    children: [{ index: true, Component: DashboardPage }],
  },
]);

export default routers;

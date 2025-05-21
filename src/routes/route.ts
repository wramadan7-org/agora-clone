import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/page";
import PricingPage from "../pages/pricing/page";

const routers = createBrowserRouter([
  {
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "/pricing", Component: PricingPage },
    ],
  },
]);

export default routers;

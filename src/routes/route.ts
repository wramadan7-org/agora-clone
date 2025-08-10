import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/page";
import PricingPage from "../pages/pricing/page";
import PrivacyPolicyPage from "../pages/privacy-policy/page";

const routers = createBrowserRouter([
  {
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "/pricing", Component: PricingPage },
      { path: "/privacy-policy", Component: PrivacyPolicyPage },
    ],
  },
]);

export default routers;

import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/page";
import PricingPage from "../pages/pricing/page";
import PrivacyPolicyPage from "../pages/privacy-policy/page";
import TermsOfConditionsPage from "../pages/terms-of-conditions/page";

const routers = createBrowserRouter([
  {
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "/pricing", Component: PricingPage },
      { path: "/privacy-policy", Component: PrivacyPolicyPage },
      { path: "/terms-of-conditions", Component: TermsOfConditionsPage },
    ],
  },
]);

export default routers;

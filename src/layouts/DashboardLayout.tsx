import { Outlet } from "react-router";
import NavbarComponent from "../components/layout/NavbarComponent";
import FooterComponent from "../components/layout/FooterComponent";
import ScrollToHashElement from "../components/renders/ScrollHashElement";

export default function RootLayout() {
  return (
    <div className="relative h-dvh">
      <ScrollToHashElement />
      <NavbarComponent />

      <Outlet />

      <FooterComponent />
    </div>
  );
}

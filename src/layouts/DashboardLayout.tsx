import { Outlet } from "react-router";
import NavbarComponent from "../components/layout/NavbarComponent";
import FooterComponent from "../components/layout/FooterComponent";

export default function RootLayout() {
  return (
    <div className="relative h-dvh">
      <NavbarComponent />

      <Outlet />

      <FooterComponent />
    </div>
  );
}

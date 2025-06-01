import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import routers from "./routes/route";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={routers} />
    </StrictMode>
  </HelmetProvider>
);

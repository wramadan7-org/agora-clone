import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import routers from "./routes/route";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <SpeedInsights />
    <StrictMode>
      <RouterProvider router={routers} />
    </StrictMode>
  </HelmetProvider>
);

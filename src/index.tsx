import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { House } from "./screens/House";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <House />
  </StrictMode>,
);

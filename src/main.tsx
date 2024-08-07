import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app"; // Fixed casing of file name
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

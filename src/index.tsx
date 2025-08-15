import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { House } from "./screens/House";
import ListingsPage from "./pages/listings";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/listings" element={<ListingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

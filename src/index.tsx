import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { House } from "./screens/House";
import ListingsPage from "./pages/listings";
import Halderfair from "./pages/listings/500-halderfair-tower";
import Ferrinhill from "./pages/listings/54-ferrinhill-street";
import Siennalane from "./pages/listings/23-siennalane-hill";
import Maple from "./pages/listings/789-maple-street";
import Oak from "./pages/listings/456-oak-avenue";
import Pine from "./pages/listings/123-pine-road";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/500-halderfair-tower" element={<Halderfair />} />
        <Route path="/listings/54-ferrinhill-street" element={<Ferrinhill />} />
        <Route path="/listings/23-siennalane-hill" element={<Siennalane />} />
        <Route path="/listings/789-maple-street" element={<Maple />} />
        <Route path="/listings/456-oak-avenue" element={<Oak />} />
        <Route path="/listings/123-pine-road" element={<Pine />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

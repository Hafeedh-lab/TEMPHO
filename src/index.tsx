import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { House } from "./screens/House";
import ListingsPage from "./pages/listings";
import HalderfairTowerPage from "./pages/listings/500-halderfair-tower";
import FerrinhillStreetPage from "./pages/listings/54-ferrinhill-street";
import SiennalaneHillPage from "./pages/listings/23-siennalane-hill";
import MapleStreetPage from "./pages/listings/789-maple-street";
import OakAvenuePage from "./pages/listings/456-oak-avenue";
import PineRoadPage from "./pages/listings/123-pine-road";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/500-halderfair-tower" element={<HalderfairTowerPage />} />
        <Route path="/listings/54-ferrinhill-street" element={<FerrinhillStreetPage />} />
        <Route path="/listings/23-siennalane-hill" element={<SiennalaneHillPage />} />
        <Route path="/listings/789-maple-street" element={<MapleStreetPage />} />
        <Route path="/listings/456-oak-avenue" element={<OakAvenuePage />} />
        <Route path="/listings/123-pine-road" element={<PineRoadPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

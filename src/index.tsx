import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { House } from "./screens/House";
import ListingsPage from "./pages/listings";
import Listing500HalderfairTower from "./pages/listings/500-halderfair-tower";
import Listing54FerrinhillStreet from "./pages/listings/54-ferrinhill-street";
import Listing23SiennalaneHill from "./pages/listings/23-siennalane-hill";
import Listing789MapleStreet from "./pages/listings/789-maple-street";
import Listing456OakAvenue from "./pages/listings/456-oak-avenue";
import Listing123PineRoad from "./pages/listings/123-pine-road";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/500-halderfair-tower" element={<Listing500HalderfairTower />} />
        <Route path="/listings/54-ferrinhill-street" element={<Listing54FerrinhillStreet />} />
        <Route path="/listings/23-siennalane-hill" element={<Listing23SiennalaneHill />} />
        <Route path="/listings/789-maple-street" element={<Listing789MapleStreet />} />
        <Route path="/listings/456-oak-avenue" element={<Listing456OakAvenue />} />
        <Route path="/listings/123-pine-road" element={<Listing123PineRoad />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

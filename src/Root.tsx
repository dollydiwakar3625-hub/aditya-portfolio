import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Work from "./components/Work";
import WeddingHighlights from "./components/WeddingHighlights";
import Reel from "./components/Reel";
import WeddingTeaser from "./components/WeddingTeaser";
import PreWedding from "./components/PreWedding";
import Pricing from "./components/pricing";
import NewPage from "./components/NewPage";

const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<Work />} />
      <Route path="/wedding-highlights" element={<WeddingHighlights />} />
      <Route path="/reels" element={<Reel />} />
      <Route path="/wedding-teaser" element={<WeddingTeaser />} />
      <Route path="/pre-wedding" element={<PreWedding />} />
<Route path="/pricing" element={<Pricing />} />
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  </Router>
);

export default Root;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Work from "./components/Work";

const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </Router>
);

export default Root;

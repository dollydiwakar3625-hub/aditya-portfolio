import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import NewPage from "./components/NewPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
    <Routes>
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  </React.StrictMode>
);

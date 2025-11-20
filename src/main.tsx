import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
// import ScrollToTopButton from "./ui/ScrollToTopButton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
    {/* <ScrollToTopButton /> */}
  </React.StrictMode>
);

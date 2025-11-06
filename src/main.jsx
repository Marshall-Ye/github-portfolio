import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Logistics from "./pages/Logistics.jsx";
import Games from "./pages/Games.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

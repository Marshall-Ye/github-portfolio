import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Logistics from "./pages/Logistics.jsx";
import Games from "./pages/Games.jsx";
import GamesPlayed from "./pages/GamesPlayed.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games-played" element={<GamesPlayed />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

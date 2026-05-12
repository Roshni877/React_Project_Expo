import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Methodology from "../pages/Methodology";
import Visualization from "../pages/Visualization";
import Team from "../pages/Team";
import DatasetGuide from "../pages/DatasetGuide"; 
import Synopsis from "../pages/Synopsis";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/team" element={<Team />} />
        <Route path="/dataset" element={<DatasetGuide />} />
        <Route path="/synopsis" element={<Synopsis />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

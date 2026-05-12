import React from "react";
import { motion } from "framer-motion";

const DigitalHUD = () => {
  return (
    <div className="digital-hud-container">
      {/* CORNER BRACKETS */}
      <div className="hud-bracket top-left"></div>
      <div className="hud-bracket top-right"></div>
      <div className="hud-bracket bottom-left"></div>
      <div className="hud-bracket bottom-right"></div>

      {/* SCANNING LINES */}
      <div className="hud-scanline"></div>

      {/* TECHNICAL DATA STRINGS */}
      <div className="hud-data-left">
        <div className="data-row">SYS.COASTAL_AI // ACTIVE</div>
        <div className="data-row">LAT: 12.9716° N</div>
        <div className="data-row">LNG: 77.5946° E</div>
        <div className="data-row">BUFFER: 2048MB</div>
      </div>

      <div className="hud-data-right">
        <div className="data-row">NEURAL_NET_V1.0.4</div>
        <div className="data-row">RESOLUTION: 10cm/px</div>
        <div className="data-row">FRAME: <span className="frame-counter">1024</span></div>
      </div>

      {/* CENTER CROSSHAIR */}
      <div className="hud-crosshair">
        <div className="cross-line h"></div>
        <div className="cross-line v"></div>
      </div>
    </div>
  );
};

export default DigitalHUD;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CinematicHUD() {
  const topBarRef = useRef();
  const bottomBarRef = useRef();
  const scannerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial cinematic reveal (bars retracting)
    tl.to([topBarRef.current, bottomBarRef.current], {
      height: "0vh",
      duration: 2,
      ease: "power4.inOut",
      delay: 0.5
    });

    // Infinite scanner line
    gsap.to(scannerRef.current, {
      top: "100%",
      duration: 8,
      ease: "linear",
      repeat: -1,
      opacity: 0.3
    });
  }, []);

  return (
    <>
      {/* Cinematic Bars */}
      <div ref={topBarRef} className="hud-bar-top"></div>
      <div ref={bottomBarRef} className="hud-bar-bottom"></div>

      {/* Scanning HUD Element */}
      <div ref={scannerRef} className="hud-scanner"></div>

      {/* HUD Info Overlay */}
      <div className="hud-overlay">
        <div className="hud-left">
          <span>LAT: 13.3409° N</span>
          <span>LNG: 74.7421° E</span>
          <span className="scanning-text">SYSTEM // STATUS: ACTIVE</span>
        </div>
        <div className="hud-right">
          <span>ALT: 450KM</span>
          <span>VEL: 7.8KM/S</span>
          <div className="hud-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default CinematicHUD;

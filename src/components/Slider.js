import React, { useState } from "react";

function Slider() {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div className="slider-container">

      <h3>🌊 Coastal Change Detection</h3>
      <p>Drag to compare before and after shoreline changes</p>

      <div className="image-slider" onMouseMove={handleMove}>
        
        {/* AFTER IMAGE */}
        <div 
          className="img" 
          style={{
            background: 'linear-gradient(135deg, #001f3f 0%, #0077be 100%)',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <span style={{ fontSize: '4rem' }}>🏜️</span>
          <h3 style={{ marginTop: '10px' }}>Eroded Shoreline</h3>
          <p style={{ opacity: 0.8 }}>Predicted impact zone (2030)</p>
        </div>

        {/* BEFORE IMAGE (clipped) */}
        <div
          className="overlay"
          style={{ 
            width: `${position}%`,
            background: 'linear-gradient(135deg, #00ced1 0%, #0077be 100%)',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            borderRight: '2px solid white'
          }}
        >
          <span style={{ fontSize: '4rem' }}>🌴</span>
          <h3 style={{ marginTop: '10px' }}>Current Shoreline</h3>
          <p style={{ opacity: 0.8 }}>Satellite baseline data (2024)</p>
        </div>

        {/* SLIDER LINE */}
        <div
          className="divider"
          style={{ 
            left: `${position}%`,
            width: '4px',
            background: 'white',
            boxShadow: '0 0 15px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            color: '#001f3f',
            padding: '5px',
            borderRadius: '50%',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>↔</div>
        </div>

      </div>

    </div>
  );
}

export default Slider;
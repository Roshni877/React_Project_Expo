import React from "react";
import { motion } from "framer-motion";
import PageReveal from "../components/PageReveal";
import TiltCard from "../components/TiltCard";

const dataSources = [
  {
    id: "01",
    name: "LANDSAT MISSION",
    agency: "NASA // USGS",
    description: "Multi-spectral imaging data acquired via the Landsat satellite network, jointly managed by the National Aeronautics and Space Administration and the U.S. Geological Survey.",
    image: "/landsat_source.png",
    color: "#0ea5e9",
    meta: "GLOBAL // TERRESTRIAL",
    website: "https://earthexplorer.usgs.gov"
  },
  {
    id: "02",
    name: "SENTINEL PROGRAM",
    agency: "COPERNICUS // EU",
    description: "High-resolution radar and optical imaging from the Sentinel constellation, part of the European Union's Copernicus Earth Observation program.",
    image: "/sentinel_source.png",
    color: "#10b981",
    meta: "EU // OCEANIC",
    website: "https://browser.dataspace.copernicus.eu"
  }
];

function DatasetGuide() {
  return (
    <PageReveal>
      <motion.main className="page dataset-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #ffa0c9 75%, #fed6aa 100%)',
        minHeight: '100vh'
      }}>
        <section className="section-header" style={{ marginTop: '60px' }}>
          <motion.span 
            className="tech-tag"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DATA_INFRASTRUCTURE // v2.0
          </motion.span>
          <h1 className="hero-title-large" style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '3px',
            marginBottom: '10px',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
          }}>DATA SOURCE</h1>
          <h1 className="hero-title-large outline-text" style={{
            fontSize: '3.5rem',
            fontWeight: '600',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '3px',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
            filter: 'drop-shadow(2px 2px 6px rgba(0,0,0,0.4))'
          }}>INTEGRATION</h1>
        </section>

        <div className="source-grid">
          {dataSources.map((source, index) => (
            <motion.div 
              key={source.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              style={{ width: '100%' }}
            >
              <TiltCard>
                <div className="source-card">
                  <div className="source-image-container">
                    <img src={source.image} alt={source.name} className="source-img" />
                    <div className="image-overlay" style={{ background: `radial-gradient(circle at center, transparent 0%, ${source.color}22 100%)` }}></div>
                  </div>
                  
                  <div className="source-content">
                    <div className="source-header">
                      <span className="source-id">{source.id}</span>
                      <div className="source-title-group">
                        <span className="source-agency" style={{ color: source.color }}>{source.agency}</span>
                        <h3 className="source-name">{source.name}</h3>
                      </div>
                    </div>
                    
                    <p className="source-desc">{source.description}</p>
                    
                    <div className="source-footer">
                      <span className="source-meta">{source.meta}</span>
                      <div className="source-actions">
                        <div className="status-indicator">
                          <div className="status-dot" style={{ backgroundColor: source.color }}></div>
                          <span className="status-text">ACTIVE_LINK</span>
                        </div>
                        <button 
                          className="website-btn"
                          onClick={() => window.open(source.website, '_blank')}
                          style={{ 
                            backgroundColor: source.color,
                            color: 'white',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = `0 4px 15px ${source.color}66`;
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          Go to Website →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <section className="mission-footer">
          <div className="mission-line"></div>
          <p className="mission-text">ALL DATASETS ARE PROCESSED THROUGH THE COASTAL AI NEURAL ENGINE FOR PREDICTIVE ACCURACY.</p>
        </section>
      </motion.main>
    </PageReveal>
  );
}

export default DatasetGuide;
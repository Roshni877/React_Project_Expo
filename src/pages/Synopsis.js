import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageReveal from "../components/PageReveal";
import { FiChevronDown, FiChevronUp, FiBook, FiUsers } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "power2.out" } },
};

function Synopsis() {
  const [showLiterature, setShowLiterature] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [openBrick, setOpenBrick] = useState(null); // 'projectInfo', 'introduction', 'objectives', 'methodology', or null

  const literatureReviews = [
    {
      id: 1,
      authors: "Arasi et al. (2025)",
      title: "Automated detection of coastal erosion hotspots using remote sensing, GIS and machine learning",
      description: "Proposed an automated approach for detecting coastal erosion hotspots by integrating remote sensing, GIS, and machine learning techniques. The study utilized satellite imagery such as Landsat along with GIS-based spatial analysis to identify erosion-prone regions."
    },
    {
      id: 2,
      authors: "Khurram et al. (2025)",
      title: "Satellite-based multi-decadal shoreline change detection using U-Net and DeepLabV3+",
      description: "Focused on multi-decadal shoreline change detection using deep learning models such as U-Net and DeepLabV3+. The study leveraged long-term satellite imagery to analyze shoreline variations over time."
    },
    {
      id: 3,
      authors: "Dang et al. (2022)",
      title: "Application of deep learning models to detect coastlines",
      description: "Explored the application of deep learning models, particularly convolutional neural networks (CNNs), for coastline detection. The study demonstrated that deep learning approaches significantly outperform traditional techniques."
    },
    {
      id: 4,
      authors: "Sun et al. (2023)",
      title: "Coastline extraction using remote sensing: A review",
      description: "Presented a comprehensive review of coastline extraction methods using remote sensing data. The paper analyzed both traditional techniques such as NDWI and edge detection, as well as modern machine learning approaches."
    },
    {
      id: 5,
      authors: "Christofi et al. (2025)",
      title: "Remote sensing, GIS, AI and UAV for shoreline detection",
      description: "Proposed an integrated approach combining remote sensing, GIS, artificial intelligence, and UAV (drone) technology for shoreline detection. By merging satellite data with high-resolution UAV imagery."
    }
  ];

  const references = [
    "[1] M. A. Arasi et al., 'Automated detection of coastal erosion hotspots using remote sensing, GIS and machine learning,' ScienceDirect, 2025.",
    "[2] S. Khurram et al., 'Satellite-based multi-decadal shoreline change detection using U-Net and DeepLabV3+,' Remote Sensing, 2025.",
    "[3] K. B. Dang et al., 'Application of deep learning models to detect coastlines,' Environmental Monitoring, 2022.",
    "[4] W. Sun et al., 'Coastline extraction using remote sensing: A review,' 2023.",
    "[5] D. Christofi et al., 'Remote sensing, GIS, AI and UAV for shoreline detection,' Applied Sciences, 2025.",
    "[6] A. S. Mahmoud et al., 'Advanced shoreline extraction using deep learning,' Springer, 2025.",
    "[7] Q. Lv et al., 'DeepSA-Net for coastline extraction using remote sensing,' 2024.",
    "[8] A. Boussetta et al., 'Machine learning methods for coastal monitoring using Landsat and Sentinel,' 2023.",
    "[9] C. Chawalit et al., '35-year analysis of coastal erosion using ML and DSAS,' 2025.",
    "[10] I. Osondu et al., 'Machine learning prediction of shoreline change,' 2025.",
    "[11] S. K. Muroi et al., 'Machine learning methods for predicting shoreline change,' 2025.",
    "[12] A. Adeli et al., 'Shoreline dynamics prediction using machine learning,' 2025.",
    "[13] M. A. Blais et al., 'Deep learning in coastal boundary extraction: Review,' 2025.",
    "[14] S. Anufriiev et al., 'CNN-based automatic beachline detection using UAV,' 2025.",
    "[15] E. Graham et al., 'Drone survey for coastal erosion monitoring,' 2025.",
    "[16] X. Zhou et al., 'Overview of coastline extraction from remote sensing,' 2023.",
    "[17] M. Rogers et al., 'Machine learning and remote sensing for shoreline monitoring,' 2022.",
    "[18] M. Al Najar et al., 'Interpretable machine learning for shoreline forecasting,' 2026.",
    "[19] L. Schlegel and V. Schulz, 'Shape optimization for coastal erosion mitigation,' 2021.",
    "[20] O. Pappas et al., 'High-resolution coastline extraction using SAR image segmentation,' 2022."
  ];

  const teamMembers = [
    { usn: "4MW23CS122", name: "Roshni" },
    { usn: "4MW23CS063", name: "Maithri Shetty" },
    { usn: "4MW23CS111", name: "Raksha" },
    { usn: "4MW23CS115", name: "Rashmi Salvankar" }
  ];

  return (
    <PageReveal>
      <motion.main className="page synopsis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{
        background: `url('https://lh3.googleusercontent.com/d/1c2nOt5GCnYhCXPkku') center/cover no-repeat, linear-gradient(135deg, rgba(245, 240, 232, 0.9), rgba(232, 224, 213, 0.9), rgba(240, 233, 220, 0.9))`,
        minHeight: '100vh',
        backgroundBlendMode: 'overlay'
      }}>
        <section className="section-header" style={{ marginTop: '60px' }}>
          <span className="tech-tag">PROJECT // SEMESTER VI</span>
          <h1 className="hero-title-large" style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(45deg, #16a34a, #15803d, #166534, #15803d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient 3s ease infinite',
            backgroundSize: '200% 200%',
            fontFamily: "'Brush Script MT', cursive, 'Comic Sans MS', fantasy",
            letterSpacing: '4px',
            marginBottom: '10px',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
          }}>COASTAL EROSION</h1>
          <h1 className="hero-title-large outline-text" style={{
            fontSize: '3.5rem',
            fontWeight: '600',
            color: 'rgba(22, 163, 74, 0.9)',
            fontFamily: "'Brush Script MT', cursive, 'Comic Sans MS', fantasy",
            letterSpacing: '4px',
            textStroke: '2px rgba(22, 163, 74, 0.3)',
            WebkitTextStroke: '2px rgba(22, 163, 74, 0.3)',
            filter: 'drop-shadow(2px 2px 6px rgba(0,0,0,0.4))'
          }}>DETECTION</h1>
          <h2 className="hero-subtitle" style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#16a34a',
            textAlign: 'center',
            marginTop: '5px',
            marginBottom: '5px',
            fontFamily: "'Brush Script MT', cursive, 'Comic Sans MS', fantasy",
            letterSpacing: '3px',
            filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
          }}>Using Machine Learning and Remote Sensing</h2>
        </section>

        <div className="synopsis-content">
          {/* BRICK ANIMATION SECTIONS */}
          <div className="brick-animation-grid">
            {/* Project Information Brick */}
            <div className={`brick-container ${openBrick === 'projectInfo' ? 'opened' : ''}`} onClick={() => setOpenBrick(openBrick === 'projectInfo' ? null : 'projectInfo')}>
              <div className="brick-square">
                <div className="brick-panel brick-panel-top-left"></div>
                <div className="brick-panel brick-panel-top-right"></div>
                <div className="brick-panel brick-panel-bottom-left"></div>
                <div className="brick-panel brick-panel-bottom-right"></div>
              </div>
              {openBrick === 'projectInfo' && (
                <div className="brick-content">
                  <button className="brick-close-btn" onClick={(e) => { e.stopPropagation(); setOpenBrick(null); }}>×</button>
                  <h3>Project Information</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="label">Project Group No:</span>
                      <span className="value">21</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Academic Year:</span>
                      <span className="value">2026-27</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Institute:</span>
                      <span className="value">Shri Madhwa Vadiraja Institute of Technology and Management</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Introduction Brick */}
            <div className={`brick-container ${openBrick === 'introduction' ? 'opened' : ''}`} onClick={() => setOpenBrick(openBrick === 'introduction' ? null : 'introduction')}>
              <div className="brick-square">
                <div className="brick-panel brick-panel-top-left"></div>
                <div className="brick-panel brick-panel-top-right"></div>
                <div className="brick-panel brick-panel-bottom-left"></div>
                <div className="brick-panel brick-panel-bottom-right"></div>
              </div>
              {openBrick === 'introduction' && (
                <div className="brick-content">
                  <button className="brick-close-btn" onClick={(e) => { e.stopPropagation(); setOpenBrick(null); }}>×</button>
                  <h3>Introduction</h3>
                  <p>Coastal erosion is a major environmental problem caused by natural forces like waves, tides, and human activities. It leads to loss of land and affects coastal ecosystems. Using satellite images and machine learning techniques helps in detecting and monitoring shoreline changes more accurately and efficiently.</p>
                </div>
              )}
            </div>

            {/* Objectives Brick */}
            <div className={`brick-container ${openBrick === 'objectives' ? 'opened' : ''}`} onClick={() => setOpenBrick(openBrick === 'objectives' ? null : 'objectives')}>
              <div className="brick-square">
                <div className="brick-panel brick-panel-top-left"></div>
                <div className="brick-panel brick-panel-top-right"></div>
                <div className="brick-panel brick-panel-bottom-left"></div>
                <div className="brick-panel brick-panel-bottom-right"></div>
              </div>
              {openBrick === 'objectives' && (
                <div className="brick-content">
                  <button className="brick-close-btn" onClick={(e) => { e.stopPropagation(); setOpenBrick(null); }}>×</button>
                  <h3>Objectives</h3>
                  <ul>
                    <li>To analyze coastal erosion using satellite data</li>
                    <li>To apply machine learning models for shoreline detection</li>
                    <li>To compare different techniques for accuracy</li>
                    <li>To identify areas of erosion and accretion</li>
                    <li>To help in coastal management and protection planning</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* METHODOLOGY BRICK - FULL WIDTH */}
          <div className={`brick-container brick-full-width ${openBrick === 'methodology' ? 'opened' : ''}`} onClick={() => setOpenBrick(openBrick === 'methodology' ? null : 'methodology')}>
            <div className="brick-square brick-square-wide">
              <div className="brick-panel brick-panel-top-left"></div>
              <div className="brick-panel brick-panel-top-right"></div>
              <div className="brick-panel brick-panel-bottom-left"></div>
              <div className="brick-panel brick-panel-bottom-right"></div>
            </div>
            {openBrick === 'methodology' && (
              <div className="brick-content brick-content-wide">
                <button className="brick-close-btn" onClick={(e) => { e.stopPropagation(); setOpenBrick(null); }}>×</button>
                <h3>Methodology</h3>
                <ol>
                  <li><strong>Data Collection</strong> - Satellite images are collected from sources like Landsat and Sentinel to study coastal areas over time.</li>
                  <li><strong>Pre-processing</strong> - The images are cleaned, corrected, and enhanced to remove noise and improve quality.</li>
                  <li><strong>Shoreline Extraction</strong> - Techniques like NDWI or machine learning models (U-Net, Random Forest) are used to separate land and water boundaries.</li>
                  <li><strong>Change Detection</strong> - Shoreline positions from different years are compared using tools like DSAS to measure erosion and accretion.</li>
                  <li><strong>Model Implementation</strong> - Machine learning or deep learning models are applied to improve accuracy in detecting shoreline changes.</li>
                  <li><strong>Analysis & Evaluation</strong> - Results are analyzed using accuracy metrics (like F1-score, IoU) to check model performance.</li>
                  <li><strong>Result Interpretation</strong> - Erosion and accretion areas are identified to understand coastal changes and support decision-making.</li>
                </ol>
              </div>
            )}
          </div>

          {/* LITERATURE REVIEW SECTION */}
          <motion.div className="collapsible-section red-section special-card" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <button 
              className="collapsible-header red-header" 
              onClick={() => setShowLiterature(!showLiterature)}
            >
              <FiBook className="icon" />
              <span>Literature Review</span>
              {showLiterature ? <FiChevronUp className="chevron" /> : <FiChevronDown className="chevron" />}
            </button>
            
            <AnimatePresence>
              {showLiterature && (
                <motion.div 
                  className="collapsible-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="literature-list">
                    {literatureReviews.map((review) => (
                      <div key={review.id} className="literature-item">
                        <h4>{review.authors}</h4>
                        <p><strong>{review.title}</strong></p>
                        <p>{review.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* REFERENCES SECTION */}
          <motion.div className="collapsible-section red-section special-card" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <button 
              className="collapsible-header red-header" 
              onClick={() => setShowReferences(!showReferences)}
            >
              <FiBook className="icon" />
              <span>References</span>
              {showReferences ? <FiChevronUp className="chevron" /> : <FiChevronDown className="chevron" />}
            </button>
            
            <AnimatePresence>
              {showReferences && (
                <motion.div 
                  className="collapsible-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="references-list">
                    {references.map((ref, index) => (
                      <div key={index} className="reference-item" data-index={index + 1}>
                        <p>{ref}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {/* INTERACTIVE GIFT BOX REVEAL */}
          <GiftBoxDownload />
        </div>
      </motion.main>
    </PageReveal>
  );
}

const GiftBoxDownload = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px', paddingBottom: '100px' }}>
      <motion.div 
        className="gift-box-wrapper"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        style={{ position: 'relative', cursor: 'pointer', width: '120px', height: '120px' }}
        onClick={() => setIsOpen(true)}
      >
        {/* Pulsing Glow Background */}
        {!isOpen && (
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '-20%',
              left: '-20%',
              width: '140%',
              height: '140%',
              background: 'radial-gradient(circle, rgba(22, 163, 74, 0.4) 0%, transparent 70%)',
              zIndex: 0
            }}
          />
        )}

        {/* The Box Body */}
        <motion.div 
          animate={isOpen ? { y: 20, opacity: 0.8 } : {}}
          style={{
            width: '100%',
            height: '100%',
            background: '#16a34a',
            borderRadius: '12px',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Vertical Ribbon */}
          <div style={{ position: 'absolute', width: '20px', height: '100%', background: '#fbbf24', left: '50%', transform: 'translateX(-50%)' }} />
          {/* Horizontal Ribbon */}
          <div style={{ position: 'absolute', width: '100%', height: '20px', background: '#fbbf24', top: '50%', transform: 'translateY(-50%)' }} />
          
          <AnimatePresence>
            {!isOpen && (
              <motion.span 
                exit={{ opacity: 0 }}
                style={{ color: '#fff', fontSize: '10px', fontWeight: '900', letterSpacing: '1px', zIndex: 3 }}
              >
                OPEN ME
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* The Box Lid */}
        <motion.div 
          animate={isOpen ? { y: -100, x: 40, rotate: 45, opacity: 0 } : { y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          style={{
            position: 'absolute',
            top: '-10px',
            left: '-5px',
            width: '130px',
            height: '30px',
            background: '#15803d',
            borderRadius: '8px',
            zIndex: 4,
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }}
        >
          {/* Lid Ribbon Knot */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30px',
            height: '30px',
            background: '#fbbf24',
            borderRadius: '50% 50% 0 0',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
          }} />
        </motion.div>
      </motion.div>

      {/* Revealed Download Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', delay: 0.3 }}
            style={{ marginTop: '40px' }}
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1QbX0UflLftd-2WqidtZ0fpaHMWTPblkr" 
              target="_blank"
              rel="noopener noreferrer"
              className="premium-download-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '20px 45px',
                background: 'rgba(22, 163, 74, 0.15)',
                backdropFilter: 'blur(20px)',
                border: '2px solid #16a34a',
                borderRadius: '60px',
                color: '#16a34a',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '15px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                boxShadow: '0 15px 40px rgba(22, 163, 74, 0.2)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#16a34a';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(22, 163, 74, 0.15)';
                e.currentTarget.style.color = '#16a34a';
              }}
            >
              <span style={{ fontSize: '24px' }}>🎁</span>
              <span>Claim Your PDF</span>
            </a>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ textAlign: 'center', color: '#16a34a', fontSize: '12px', fontWeight: 'bold', marginTop: '15px', letterSpacing: '1px' }}
            >
              SUCCESSFULLY UNBOXED!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Synopsis;
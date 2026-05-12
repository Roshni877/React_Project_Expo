import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

function MemberModal({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="member-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="member-modal-card"
            initial={{ scale: 0.5, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 60 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="member-modal-close" onClick={onClose}>
              <FiX size={20} />
            </button>

            {/* Profile Photo */}
            <div className="modal-avatar-ring">
              <div className="modal-avatar">
                <span>{member.name.charAt(0)}</span>
              </div>
              <div className="modal-avatar-glow" />
            </div>

            {/* Info */}
            <h2 className="modal-member-name">{member.name}</h2>
            <p className="modal-member-usn">USN: {member.usn}</p>
            <p className="modal-member-intro">Hi, I'm part of the Core Development Team.</p>

            {/* Tech Tags */}
            <div className="modal-tech-tags">
              <span className="modal-tag">COASTAL AI</span>
              <span className="modal-tag">ML RESEARCH</span>
              <span className="modal-tag">DEV</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MemberModal;

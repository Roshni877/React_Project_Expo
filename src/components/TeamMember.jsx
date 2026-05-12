import React from "react";
import { motion } from "framer-motion";

function TeamMember({ member, index, isSelected, onSingleClick, onDoubleClick, guideRef }) {
  return (
    <motion.div
      className={`team-seat-member ${isSelected ? "selected-member" : ""}`}
      animate={
        isSelected
          ? { x: 0, y: -30, scale: 1.08, zIndex: 10 }
          : { x: 0, y: 0, scale: 1, zIndex: 1 }
      }
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      whileHover={{ scale: isSelected ? 1.08 : 1.05 }}
      onClick={() => onSingleClick(member.id)}
      onDoubleClick={(e) => { e.stopPropagation(); onDoubleClick(member); }}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {/* Floating idle animation wrapper */}
      <motion.div
        className="member-avatar-wrap"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="member-avatar">
          <span className="member-initial">{member.name.charAt(0)}</span>
        </div>
        {isSelected && <div className="selected-glow-ring" />}
      </motion.div>
      <p className="member-seat-name">{member.name}</p>
      <p className="member-seat-usn">{member.usn}</p>
    </motion.div>
  );
}

export default TeamMember;

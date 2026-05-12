import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

function MouseFollower() {
  const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        <div className="cursor-dot"></div>
      </motion.div>
    </>
  );
}

export default MouseFollower;

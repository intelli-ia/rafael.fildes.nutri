"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

export function ElegantShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color = "rgba(97,191,191,0.18)",
  style,
}: {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      style={{ position: "absolute", ...style }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            background: `linear-gradient(135deg, ${color} 0%, transparent 70%)`,
            border: "1px solid rgba(97,191,191,0.2)",
            boxShadow: `0 0 40px ${color}`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

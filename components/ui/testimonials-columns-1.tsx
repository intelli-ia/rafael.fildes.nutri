"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  items: React.ReactNode[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "16px" }}
      >
        {[0, 1].map((copyIndex) => (
          <React.Fragment key={copyIndex}>
            {props.items.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

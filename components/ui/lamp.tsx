"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BG = "#060E0D";

export const LampContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    // Outer div: NO overflow:hidden — the section handles it.
    // This lets the glow bleed downward into the children/h1 zone.
    <div className={cn("relative w-full flex flex-col items-center", className)}>

      {/* ── Beam visual layer: 180px tall ── */}
      <div style={{ position: "relative", width: "100%", height: "180px" }}>

        {/* Left conic wedge — top:0, right edge at center */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            right: "50%",
            height: "12rem",
            overflow: "visible",
            backgroundImage: "conic-gradient(from 70deg at center top, #06b6d4, transparent 50%)",
          }}
        >
          {/* Fade bottom edge into bg */}
          <div style={{ position: "absolute", width: "100%", left: 0, bottom: 0, height: "8rem", background: BG, maskImage: "linear-gradient(to top, white, transparent)", WebkitMaskImage: "linear-gradient(to top, white, transparent)" }} />
          {/* Fade left edge into bg */}
          <div style={{ position: "absolute", width: "8rem", height: "100%", left: 0, bottom: 0, background: BG, maskImage: "linear-gradient(to right, white, transparent)", WebkitMaskImage: "linear-gradient(to right, white, transparent)" }} />
        </motion.div>

        {/* Right conic wedge — top:0, left edge at center */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            height: "12rem",
            backgroundImage: "conic-gradient(from 290deg at center top, transparent 50%, #06b6d4)",
          }}
        >
          {/* Fade right edge */}
          <div style={{ position: "absolute", width: "8rem", height: "100%", right: 0, bottom: 0, background: BG, maskImage: "linear-gradient(to left, white, transparent)", WebkitMaskImage: "linear-gradient(to left, white, transparent)" }} />
          {/* Fade bottom edge */}
          <div style={{ position: "absolute", width: "100%", right: 0, bottom: 0, height: "8rem", background: BG, maskImage: "linear-gradient(to top, white, transparent)", WebkitMaskImage: "linear-gradient(to top, white, transparent)" }} />
        </motion.div>

        {/* Wide glow orb — positioned at top, bleeds DOWN into children */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "28rem",
          height: "14rem",
          borderRadius: "9999px",
          background: "#06b6d4",
          opacity: 0.35,
          filter: "blur(64px)",
          zIndex: 12,
          pointerEvents: "none",
        }} />

        {/* Bright inner glow pill */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "5rem",
            borderRadius: "9999px",
            background: "#22d3ee",
            filter: "blur(20px)",
            zIndex: 16,
            pointerEvents: "none",
          }}
        />

        {/* Horizontal beam line — at very top */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "2px",
            background: "#22d3ee",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Children — appear just after the beam area with slight overlap into the glow */}
      {children && (
        <div style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          marginTop: "-20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px",
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

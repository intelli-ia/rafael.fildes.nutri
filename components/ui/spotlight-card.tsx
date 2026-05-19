"use client";
import React, { useEffect, useRef, useId, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange" | "teal";
  width?: string | number;
  height?: string | number;
  /** true = local pointer + 3D tilt (WhatYouLearn). false = global pointer fixed (Pricing). */
  tilt?: boolean;
  /** true = sem backdrop próprio, deixa o background do style aparecer */
  transparent?: boolean;
}

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
  teal:   { base: 180, spread: 160 },
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  style: extraStyle,
  glowColor = "teal",
  width,
  height,
  tilt = false,
  transparent = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawId  = useId();
  const uid    = rawId.replace(/:/g, "");
  const attr   = `gc-${uid}`;
  const sel    = `[data-glow="${attr}"]`;

  // ── Global pointer mode (original, background-attachment: fixed) ──
  useEffect(() => {
    if (tilt) return;
    const sync = (e: PointerEvent) => {
      const el = cardRef.current;
      if (!el) return;
      el.style.setProperty("--x",  e.clientX.toFixed(2));
      el.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(2));
      el.style.setProperty("--y",  e.clientY.toFixed(2));
      el.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(2));
    };
    document.addEventListener("pointermove", sync);
    return () => document.removeEventListener("pointermove", sync);
  }, [tilt]);

  // ── Local pointer + tilt mode ──
  const handleMouseMove = tilt
    ? (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--x",  x.toFixed(2));
        el.style.setProperty("--y",  y.toFixed(2));
        el.style.setProperty("--xp", (x / rect.width).toFixed(2));
        el.style.setProperty("--yp", (y / rect.height).toFixed(2));
        const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotY = ((x - rect.width  / 2) / (rect.width  / 2)) *  10;
        el.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.04,1.04,1.04)`;
        el.style.transition = "transform 0.08s linear";
      }
    : undefined;

  const handleMouseLeave = tilt
    ? () => {
        const el = cardRef.current;
        if (!el) return;
        el.style.transform  = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
        el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
        el.style.setProperty("--x", (el.offsetWidth  / 2).toFixed(2));
        el.style.setProperty("--y", (el.offsetHeight / 2).toFixed(2));
      }
    : undefined;

  const { base, spread } = glowColorMap[glowColor];
  const attachment = tilt ? "scroll" : "fixed";
  const backdrop   = transparent ? "transparent" : "#0D2221";

  const inlineStyles: React.CSSProperties & Record<string, string | number> = {
    "--base":           base,
    "--spread":         spread,
    "--radius":         "16",
    "--border":         "1.5",
    "--backdrop":       backdrop,
    "--backup-border":  "rgba(97,191,191,0.18)",
    "--size":           "260",
    "--outer":          "1",
    "--border-size":    "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue":            "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(175 70% 55% / 0.10), transparent
    )`,
    backgroundColor:      "var(--backdrop)",
    backgroundSize:       "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition:   "50% 50%",
    backgroundAttachment: attachment,
    border:       "var(--border-size) solid var(--backup-border)",
    position:     "relative",
    touchAction:  "none",
    ...(tilt ? { willChange: "transform", transformStyle: "preserve-3d" as const } : {}),
    ...(width  !== undefined ? { width:  typeof width  === "number" ? `${width}px`  : width  } : {}),
    ...(height !== undefined ? { height: typeof height === "number" ? `${height}px` : height } : {}),
    ...extraStyle,
  };

  // Scoped CSS per-instance — avoids fixed vs scroll conflict between cards
  const css = `
    ${sel}::before,
    ${sel}::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: ${attachment};
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    ${sel}::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(175 65% 55% / 1), transparent 100%
      );
      filter: brightness(1.4);
    }
    ${sel}::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.45) calc(var(--spotlight-size) * 0.45) at
        calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        hsl(175 80% 80% / 0.5), transparent 100%
      );
    }
    ${sel} [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    ${sel} > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        ref={cardRef}
        data-glow={attr}
        style={inlineStyles}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`rounded-2xl relative ${className}`}
      >
        <div data-glow />
        {children}
      </div>
    </>
  );
};

export { GlowCard };

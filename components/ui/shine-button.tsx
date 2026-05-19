import { CSSProperties, ReactNode } from "react";

interface ShineButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
  target?: string;
  rel?: string;
}

export function ShineButton({ href, onClick, children, style, target, rel }: ShineButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    fontFamily: "inherit",
    fontWeight: 800,
    letterSpacing: "0.01em",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    ...style,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="btn-shine" style={base}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="btn-shine" style={base}>
      {children}
    </button>
  );
}

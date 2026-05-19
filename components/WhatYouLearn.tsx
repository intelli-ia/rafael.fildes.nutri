"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useIsMobile } from "@/lib/useIsMobile";

const P = "#173A39";
const S = "#FFFFF2";
const T = "#61BFBF";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, {
    opacity: v ? 1 : 0,
    transform: v ? "none" : "translateY(32px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  }] as const;
}

const modules = [
  { n: "01", title: "A Ciência por Trás do Nome", desc: "De onde surgiram e como realmente funcionam Low Carb, Cetogênica, Mediterrânea, DASH e Jejum Intermitente, sem decoreba, com mecanismo real." },
  { n: "02", title: "Bioquímica Aplicada", desc: "Como cada estratégia age no metabolismo, quais respostas fisiológicas esperar e por que o mesmo protocolo funciona de forma diferente em organismos diferentes." },
  { n: "03", title: "Raciocínio de Adaptação", desc: "Como transitar entre estratégias, combinar protocolos e justificar cada decisão com base em evidências, não em regras fixas." },
  { n: "04", title: "Prática de Consultório", desc: "Casos reais para você aplicar raciocínio clínico desde o estágio até o primeiro atendimento. Você sai sabendo o que dizer, e por quê." },
];

const deliverables = [
  { icon: "🎥", title: "8 Aulas Completas", sub: "Gravadas ao vivo" },
  { icon: "📋", title: "Guias Comparativos", sub: "PDFs de bolso" },
  { icon: "📚", title: "Apostilas de Resumo", sub: "Bioquímica mastigada" },
  { icon: "📝", title: "Transcrições", sub: "Todas as aulas" },
  { icon: "🏆", title: "Certificado", sub: "De conclusão" },
];

function MobileModuleCard({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.15 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      padding: "28px 0",
      borderBottom: `1px solid ${S}0A`,
      position: "relative", overflow: "hidden",
      opacity: v ? 1 : 0,
      transform: v ? "none" : "translateY(28px)",
      transition: `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`,
    }}>
      {/* Watermark number */}
      <span style={{
        position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
        fontSize: "88px", fontWeight: 900,
        color: `rgba(97,191,191,0.06)`,
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.04em",
      }}>
        {mod.n}
      </span>

      <p style={{ fontSize: "10px", fontWeight: 800, color: T, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>
        Módulo {mod.n}
      </p>
      <h3 style={{ fontSize: "22px", fontWeight: 900, color: S, lineHeight: 1.15, marginBottom: 10, letterSpacing: "-0.02em" }}>
        {mod.title}
      </h3>
      <p style={{ fontSize: "14px", color: `${S}66`, lineHeight: 1.8, fontWeight: 400 }}>
        {mod.desc}
      </p>
    </div>
  );
}

export default function WhatYouLearn() {
  const isMobile = useIsMobile();

  const [h1Ref, h1S] = useReveal(0);
  const [dRef, dS] = useReveal(0.1);

  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      const rect = stickyRef.current.getBoundingClientRect();
      const totalHeight = stickyRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = totalHeight > 0 ? scrolled / totalHeight : 0;
      const idx = Math.min(modules.length - 1, Math.floor(progress * modules.length));
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  /* ── MOBILE ─────────────────────────────────────────────── */
  if (isMobile) {
    return (
      <section id="programa" style={{ backgroundColor: P, position: "relative" }}>
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: `linear-gradient(${S}04 1px, transparent 1px), linear-gradient(90deg, ${S}04 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }} />

        {/* Header */}
        <div style={{ padding: "72px 24px 40px", position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "10px", fontWeight: 700, color: T, letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: "100px",
            border: `1px solid ${T}30`, backgroundColor: `${T}08`,
            marginBottom: "20px",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: T, display: "inline-block" }} />
            O programa
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: S, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 14 }}>
            O que você vai dominar{" "}
            <span style={{ color: T }}>nas 8 aulas</span>
          </h2>
          <p style={{ fontSize: "15px", color: `${S}60`, lineHeight: 1.7, fontWeight: 400 }}>
            Um programa científico desenhado por quem vive a bioquímica no doutorado e a clínica no consultório.
          </p>
        </div>

        {/* Sticky scroll — módulos (mesmo efeito do desktop) */}
        <div ref={stickyRef} style={{ height: `${modules.length * 100}vh`, position: "relative", zIndex: 1 }}>
          <div style={{
            position: "sticky", top: 0, height: "100vh",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", backgroundColor: "#FFFFF2",
          }}>
            {/* Número enorme ao fundo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeIdx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}
              >
                <span style={{ fontSize: "clamp(180px, 50vw, 280px)", fontWeight: 900, color: `rgba(23,58,57,0.07)`, lineHeight: 1, letterSpacing: "-0.06em", userSelect: "none" }}>
                  {modules[activeIdx].n}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Conteúdo animado */}
            <div style={{ position: "relative", width: "100%", padding: "0 24px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIdx}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p style={{ fontSize: 10, fontWeight: 800, color: T, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
                    Módulo {modules[activeIdx].n}
                  </p>
                  <h2 style={{ fontSize: "clamp(28px, 8vw, 40px)", fontWeight: 900, lineHeight: 1.1, color: P, letterSpacing: "-0.03em", marginBottom: 20 }}>
                    {modules[activeIdx].title}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: `${P}99`, fontWeight: 400 }}>
                    {modules[activeIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div style={{ padding: "56px 24px 72px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <div style={{ height: 1, flex: 1, background: `linear-gradient(to right, transparent, ${S}18)` }} />
            <span style={{ fontSize: "10px", fontWeight: 700, color: `${S}30`, textTransform: "uppercase", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
              Tudo que você recebe
            </span>
            <div style={{ height: 1, flex: 1, background: `linear-gradient(to left, transparent, ${S}18)` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {deliverables.map((d, i) => (
              <GlowCard key={i} tilt glowColor="teal" className="p-4 gap-2 text-center flex flex-col items-center justify-center" height={120}>
                <div style={{ fontSize: 24 }}>{d.icon}</div>
                <p style={{ fontSize: "12px", fontWeight: 800, color: S, lineHeight: 1.3 }}>{d.title}</p>
                <p style={{ fontSize: "10px", color: `${S}44`, fontWeight: 400 }}>{d.sub}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP (unchanged) ─────────────────────────────────── */
  return (
    <section id="programa" style={{ backgroundColor: P, position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `linear-gradient(${S}04 1px, transparent 1px), linear-gradient(90deg, ${S}04 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 80px", position: "relative", zIndex: 1 }}>
        <div ref={h1Ref} style={{ ...h1S, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "flex-end" }} className="wyl-header">
          <div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "11px", fontWeight: 700, color: T, letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "6px 18px", borderRadius: "100px",
              border: `1px solid ${T}30`, backgroundColor: `${T}08`,
              marginBottom: "28px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T, display: "inline-block" }} />
              O programa
            </span>
            <h2 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, color: S, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              O que você vai dominar{" "}
              <span style={{ color: T }}>nas 8 aulas</span>
            </h2>
          </div>
          <div style={{ paddingBottom: "8px" }}>
            <p style={{ fontSize: "17px", color: `${S}66`, lineHeight: 1.8, fontWeight: 400 }}>
              Um programa científico desenhado por quem vive a bioquímica no doutorado e a clínica no consultório. Sem decoreba. Com raciocínio.
            </p>
          </div>
        </div>
      </div>

      <div ref={stickyRef} style={{ height: `${modules.length * 100}vh`, position: "relative", zIndex: 1 }}>
        <div style={{
          position: "sticky", top: 0, height: "100vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", backgroundColor: "#FFFFF2",
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${activeIdx}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}
            >
              <span style={{ fontSize: "clamp(240px, 40vw, 440px)", fontWeight: 900, color: `rgba(23,58,57,0.07)`, lineHeight: 1, letterSpacing: "-0.06em", userSelect: "none" }}>
                {modules[activeIdx].n}
              </span>
            </motion.div>
          </AnimatePresence>

          <div style={{ position: "relative", width: "100%", maxWidth: 820, padding: "0 48px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIdx}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontSize: 11, fontWeight: 800, color: T, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>
                  Módulo {modules[activeIdx].n}
                </p>
                <h2 style={{ fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 900, lineHeight: 1.08, color: P, letterSpacing: "-0.035em", marginBottom: 28 }}>
                  {modules[activeIdx].title}
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: `${P}99`, fontWeight: 400, maxWidth: 580 }}>
                  {modules[activeIdx].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 40px 140px", position: "relative", zIndex: 1 }}>
        <div ref={dRef} style={dS}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
            <div style={{ height: 1, flex: 1, background: `linear-gradient(to right, transparent, ${S}18)` }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: `${S}30`, textTransform: "uppercase", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
              Tudo que você recebe ao entrar
            </span>
            <div style={{ height: 1, flex: 1, background: `linear-gradient(to left, transparent, ${S}18)` }} />
          </div>

          <div className="del-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
            {deliverables.map((d, i) => (
              <GlowCard key={i} tilt glowColor="teal" className="del-card p-6 gap-3 text-center flex flex-col items-center justify-center" height={160}>
                <div style={{ fontSize: 28 }}>{d.icon}</div>
                <p style={{ fontSize: "13px", fontWeight: 800, color: S, lineHeight: 1.3 }}>{d.title}</p>
                <p style={{ fontSize: "11px", color: `${S}44`, fontWeight: 400 }}>{d.sub}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .wyl-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .del-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(max-width:480px){
          .del-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

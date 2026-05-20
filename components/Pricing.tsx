"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Lock, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useIsMobile } from "@/lib/useIsMobile";

const T = "#61BFBF";
const S = "#FFFFF2";

const items = [
  { icon: "🎥", title: "8 Aulas Completas Gravadas", sub: "Acesso por 1 ano ao conteúdo ao vivo", value: "R$ 197" },
  { icon: "📋", title: "Guias Comparativos de Dietas", sub: "PDFs de bolso para consulta rápida", value: "R$ 47" },
  { icon: "📚", title: "Apostilas de Bioquímica Aplicada", sub: "Resumos mastigados de cada mecanismo", value: "R$ 47" },
  { icon: "📝", title: "Transcrições de Todas as Aulas", sub: "Para estudar no seu próprio ritmo", value: "R$ 27" },
  { icon: "🔬", title: "Bônus: Pesquisa Científica Aplicada", sub: "Como ler e interpretar estudos clínicos", value: "R$ 97", bonus: true },
  { icon: "🏆", title: "Certificado de Conclusão", sub: "Para o seu portfólio profissional", value: "incluso" },
  { icon: "♾️", title: "1 Ano de Acesso Ilimitado", sub: "Reassista quantas vezes precisar", value: "incluso" },
];

const cardStyle = {
  borderRadius: "24px",
  display: "grid",
  gridTemplateColumns: "1fr 360px",
  background: "linear-gradient(145deg, #0E2322 0%, #07120F 60%, #060E0D 100%)",
  boxShadow: `0 0 100px rgba(97,191,191,0.07), 0 48px 96px rgba(0,0,0,0.5)`,
} as React.CSSProperties;

function CardWrapper({ isMobile, children }: { isMobile: boolean; children: React.ReactNode }) {
  if (isMobile) {
    return (
      <div className="pricing-card w-full" style={{ ...cardStyle, border: "1px solid rgba(97,191,191,0.18)" }}>
        {children}
      </div>
    );
  }
  return (
    <GlowCard transparent glowColor="teal" className="pricing-card w-full"
      style={{ "--radius": "24", ...cardStyle } as React.CSSProperties & Record<string, string | number>}>
      {children}
    </GlowCard>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      id="investimento"
      className="pricing-section"
      style={{ backgroundColor: "#060E0D", padding: "120px 0 140px", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow top */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 900, height: 700,
        background: `radial-gradient(ellipse at 50% 0%, ${T}13 0%, transparent 68%)`,
        pointerEvents: "none",
      }} />

      <div className="pricing-inner" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 700, color: T, letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "6px 18px", borderRadius: 100,
            border: `1px solid ${T}30`, backgroundColor: `${T}08`,
            marginBottom: 22,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T, display: "inline-block" }} />
            Investimento
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 900, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            background: `linear-gradient(175deg, ${S} 40%, ${T} 120%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Acesso completo ao<br/>Atlas da Dieta
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: `${S}50`, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
            Tudo que você precisa para sair da decoreba e dominar o raciocínio clínico por trás de cada dieta.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
        <CardWrapper isMobile={isMobile}>
          {/* ── LEFT — Value stack ── */}
          <div style={{ padding: "52px 48px", borderRight: `1px solid ${T}10` }}>
            <p style={{
              fontSize: 10, fontWeight: 800, color: `${S}35`, letterSpacing: "0.15em",
              textTransform: "uppercase", marginBottom: 32,
            }}>
              Tudo que entra no seu acesso
            </p>

            <div>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.32 + i * 0.07 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 18,
                    padding: "17px 0",
                    borderBottom: i < items.length - 1 ? `1px solid ${S}07` : "none",
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: item.bonus
                      ? `linear-gradient(135deg, ${T}20, ${T}09)`
                      : `rgba(255,255,242,0.04)`,
                    border: `1px solid ${item.bonus ? T + "35" : S + "0C"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                  }}>
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: S, lineHeight: 1.35 }}>{item.title}</p>
                      {item.bonus && (
                        <span style={{
                          fontSize: 8, fontWeight: 800, color: T,
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          padding: "2px 8px", borderRadius: 100,
                          border: `1px solid ${T}40`, backgroundColor: `${T}13`,
                        }}>bônus</span>
                      )}
                    </div>
                    <p style={{ fontSize: 12, color: `${S}3A`, marginTop: 3, lineHeight: 1.5 }}>{item.sub}</p>
                  </div>

                  {/* Value */}
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    {item.value === "incluso" ? (
                      <span style={{ fontSize: 11, color: `${S}28`, fontWeight: 500 }}>incluso</span>
                    ) : (
                      <span style={{ fontSize: 13, fontWeight: 700, color: `${T}88` }}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total value bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.95 }}
              style={{
                marginTop: 28, padding: "18px 22px",
                borderRadius: 14,
                background: `linear-gradient(135deg, ${T}0D, ${T}05)`,
                border: `1px solid ${T}22`,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, color: `${S}50` }}>Valor total dos materiais</span>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: `${S}55`, textDecoration: "line-through" }}>R$ 415</span>
                <span style={{
                  fontSize: 10, fontWeight: 800, color: T, letterSpacing: "0.06em",
                  padding: "3px 9px", borderRadius: 100,
                  background: `${T}15`, border: `1px solid ${T}35`,
                }}>HOJE</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT — Price + CTA ── */}
          <div style={{
            padding: "52px 36px",
            display: "flex", flexDirection: "column",
            background: `linear-gradient(180deg, ${T}07 0%, transparent 55%)`,
          }}>

            {/* Price display */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
                <span style={{
                  fontSize: 14, color: `${S}38`, textDecoration: "line-through",
                  fontWeight: 500,
                }}>
                  R$ 347
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 800, color: T,
                  padding: "3px 10px", borderRadius: 100,
                  background: `${T}15`, border: `1px solid ${T}35`,
                  letterSpacing: "0.08em",
                }}>
                  −43% OFF
                </span>
              </div>

              <div style={{
                fontSize: "clamp(60px, 7vw, 76px)", fontWeight: 900, lineHeight: 1,
                background: `linear-gradient(175deg, ${S} 20%, ${T} 115%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                letterSpacing: "-0.04em",
              }}>
                R$&nbsp;197
              </div>

              <p style={{ fontSize: 12, color: `${S}40`, marginTop: 10, fontWeight: 500 }}>
                à vista no PIX
              </p>
              <p style={{ fontSize: 11, color: `${S}28`, marginTop: 5 }}>
                ou 12× de R$ 20,02 no cartão
              </p>
            </div>

            {/* CTA */}
            <Link href="#" style={{ textDecoration: "none", display: "block" }}>
              <button
                className="btn-shine pricing-cta"
                style={{
                  width: "100%",
                  padding: "17px 20px",
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${T} 0%, #4BAAAA 100%)`,
                  border: "none",
                  color: "#0B1F1E",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  letterSpacing: "-0.01em",
                  fontFamily: "inherit",
                  boxShadow: `0 4px 28px ${T}30`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <Zap size={15} />
                Quero meu acesso agora
                <ArrowRight size={14} />
              </button>
            </Link>

            {/* Trust signals */}
            <div className="trust-signals" style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                { Icon: Shield, text: "14 dias de garantia incondicional" },
                { Icon: Lock, text: "Pagamento 100% seguro" },
                { Icon: Check, text: "Acesso imediato após a compra" },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: `${T}0E`, border: `1px solid ${T}1E`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={12} color={T} />
                  </div>
                  <span style={{ fontSize: 12, color: `${S}48`, fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Guarantee seal */}
            <div style={{
              marginTop: 28,
              padding: "18px 16px",
              borderRadius: 14,
              border: `1px dashed ${S}14`,
              textAlign: "center",
              flex: 1,
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <p style={{ fontSize: 26, marginBottom: 8 }}>🛡️</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: `${S}55`, lineHeight: 1.5 }}>
                Garantia de 14 dias
              </p>
              <p style={{ fontSize: 11, color: `${S}32`, marginTop: 6, lineHeight: 1.6 }}>
                Se não gostar, devolvemos 100%<br />do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </CardWrapper>
        </motion.div>
      </div>

      <style>{`
        .pricing-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(97,191,191,0.42) !important;
        }
        @media (max-width: 860px) {
          .pricing-card {
            grid-template-columns: 1fr !important;
          }
          .pricing-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(97,191,191,0.1) !important;
            padding: 36px 24px !important;
            order: 1;
          }
          .pricing-card > div:last-child {
            padding: 36px 24px !important;
            order: 2;
          }
        }
        @media (max-width: 768px) {
          .pricing-section { padding: 72px 0 80px !important; }
          .pricing-inner { padding: 0 20px !important; }
          .pricing-card > div:first-child,
          .pricing-card > div:last-child { padding: 28px 20px !important; }
          .pricing-cta { font-size: 15px !important; padding: 18px 20px !important; min-height: 56px; }
          .trust-signals { align-items: center !important; }
          .trust-signals > div { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}

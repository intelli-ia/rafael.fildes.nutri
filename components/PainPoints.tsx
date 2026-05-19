"use client";
import { useRef, useEffect, useState } from "react";

const S = "#FFFFF2";
const T = "#61BFBF";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  const style = {
    opacity: v ? 1 : 0,
    transform: v ? "none" : "translateY(36px)",
    transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
  };
  return [ref, style] as const;
}

const problems = [
  { label: "O silêncio técnico", desc: "Você trava quando alguém pergunta o mecanismo fisiológico de verdade por trás de uma dieta." },
  { label: "A insegurança clínica", desc: "Aplica protocolos sem entender por que funcionam, e fica perdido quando falham." },
  { label: "O medo de parecer raso", desc: "Evita discussões técnicas mais profundas porque sabe que seu repertório é limitado." },
];
const solutions = [
  { label: "Raciocínio bioquímico", desc: "Você explica o mecanismo de qualquer dieta com segurança e profundidade científica real." },
  { label: "Adaptação inteligente", desc: "Você escolhe e justifica protocolos com base na realidade metabólica individual de cada paciente." },
  { label: "Autoridade clínica", desc: "Você se posiciona como quem realmente entende o que faz, e isso aparece em cada atendimento." },
];

export default function PainPoints() {
  const [h1Ref, h1S] = useReveal(0);
  const [h2Ref, h2S] = useReveal(0.15);
  const [pRef, pS] = useReveal(0.3);
  const [bRef, bS] = useReveal(0.45);

  return (
    <section className="pp-section" style={{ backgroundColor: "#060E0D", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Ambient glows */}
      <div style={{ position:"absolute", top:"15%", left:"-8%", width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"20%", right:"-8%", width:480, height:480, borderRadius:"50%", background:`radial-gradient(circle, ${T}0A 0%, transparent 70%)`, pointerEvents:"none" }} />

      <div className="pp-inner" style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 40px" }}>

        {/* Label */}
        <div ref={h1Ref} style={{ ...h1S, textAlign:"center" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:8,
            fontSize:"11px", fontWeight:700, color:T, letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"6px 18px", borderRadius:"100px",
            border:`1px solid ${T}30`, backgroundColor:`${T}08`,
            marginBottom:"28px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", backgroundColor:T, display:"inline-block" }} />
            O diagnóstico
          </span>
        </div>

        {/* Headline */}
        <div ref={h2Ref} style={{ ...h2S, marginBottom:"72px", textAlign:"center" }}>
          <h2 className="pp-headline" style={{
            fontSize:"clamp(38px, 5vw, 68px)", fontWeight:900,
            color:S, lineHeight:1.06, letterSpacing:"-0.03em",
            maxWidth:"820px", marginBottom:"20px", margin:"0 auto 20px",
          }}>
            A faculdade te deu protocolos.{" "}
            <span style={{ color:T }}>Ninguém te ensinou a raciocinar.</span>
          </h2>
          <p className="pp-sub" style={{ fontSize:"18px", color:`${S}55`, lineHeight:1.7, maxWidth:"520px", fontWeight:400, margin:"0 auto" }}>
            Esse é o buraco que separa quem aplica dietas de quem as domina.
          </p>
        </div>

        {/* Two panels */}
        <div ref={pRef} style={pS} className="pp-grid">
          {/* Left — problems */}
          <div style={{
            borderRadius:"24px 0 0 24px",
            padding:"56px 48px",
            background:"linear-gradient(155deg, #140909 0%, #0A0F0F 100%)",
            border:"1px solid rgba(239,68,68,0.1)",
            borderRight:"none",
          }}>
            <p style={{ display:"flex", alignItems:"center", gap:10, fontSize:"16px", fontWeight:700, color:"rgba(239,68,68,0.55)", textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:"48px" }}>
              <span style={{ fontSize:"22px" }}>❌</span>
              Sem o Atlas, hoje
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {problems.map((p, i) => (
                <div key={i} style={{
                  padding:"28px 0",
                  borderTop: i > 0 ? "1px solid rgba(239,68,68,0.07)" : "none",
                  display:"flex", gap:20,
                }}>
                  <span style={{ fontSize:"20px", fontWeight:800, color:"rgba(239,68,68,0.25)", flexShrink:0, paddingTop:2 }}>
                    {String(i+1).padStart(2,"0")}
                  </span>
                  <div>
                    <p style={{ fontSize:"14px", fontWeight:800, color:"rgba(239,68,68,0.5)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:8 }}>
                      {p.label}
                    </p>
                    <p style={{ fontSize:"17px", color:`${S}44`, lineHeight:1.8, fontWeight:400 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — solutions */}
          <div style={{
            borderRadius:"0 24px 24px 0",
            padding:"56px 48px",
            background:"linear-gradient(155deg, #071816 0%, #060E0D 100%)",
            border:`1px solid ${T}18`,
            borderLeft:`1px solid ${T}10`,
            position:"relative", overflow:"hidden",
          }}>
            <div style={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:`radial-gradient(circle, ${T}18 0%, transparent 70%)`, pointerEvents:"none" }} />
            <p style={{ display:"flex", alignItems:"center", gap:10, fontSize:"16px", fontWeight:700, color:T, textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:"48px" }}>
              <span style={{ fontSize:"22px" }}>✅</span>
              Com o Atlas, depois
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {solutions.map((s, i) => (
                <div key={i} style={{
                  padding:"28px 0",
                  borderTop: i > 0 ? `1px solid ${T}0D` : "none",
                  display:"flex", gap:20,
                }}>
                  <span style={{ fontSize:"20px", fontWeight:800, color:`${T}30`, flexShrink:0, paddingTop:2 }}>
                    {String(i+1).padStart(2,"0")}
                  </span>
                  <div>
                    <p style={{ fontSize:"14px", fontWeight:800, color:T, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:8 }}>
                      {s.label}
                    </p>
                    <p style={{ fontSize:"17px", color:`${S}BB`, lineHeight:1.8, fontWeight:400 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bridge */}
        <div ref={bRef} style={{
          ...bS, marginTop:48,
          padding:"36px 48px", borderRadius:20,
          background:`linear-gradient(135deg, ${S}03 0%, ${S}01 100%)`,
          border:`1px solid ${S}08`,
          justifyContent:"center", textAlign:"center",
        }} className="pp-bridge">
          <p style={{ fontSize:"20px", color:`${S}66`, lineHeight:1.8, fontWeight:400 }}>
            Não é culpa sua. A grade curricular entrega protocolos prontos, mas esquece de mostrar o mecanismo real.
            <br /><strong style={{ color:S, fontWeight:700 }}>O Atlas da Dieta existe para preencher esse buraco e transformar insegurança em domínio técnico.</strong>
          </p>
        </div>
      </div>

      <style>{`
        .pp-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media(max-width:768px){
          .pp-section { padding: 80px 0 !important; }
          .pp-inner { padding: 0 20px !important; }
          .pp-grid { grid-template-columns: 1fr !important; }
          .pp-grid > div:first-child { border-radius: 24px 24px 0 0 !important; border-right: 1px solid rgba(239,68,68,0.1) !important; border-bottom: none !important; padding: 36px 24px !important; }
          .pp-grid > div:last-child { border-radius: 0 0 24px 24px !important; border-left: 1px solid rgba(97,191,191,0.18) !important; padding: 36px 24px !important; }
          .pp-bridge { padding: 24px !important; }
          .pp-headline { font-size: 32px !important; }
          .pp-sub { font-size: 15px !important; }
          .pp-bridge-text { font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}

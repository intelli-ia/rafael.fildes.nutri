"use client";
import React, { useRef, useEffect, useState } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useIsMobile } from "@/lib/useIsMobile";

const P = "#173A39";
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
    transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
  }] as const;
}

const creds = [
  { icon:"🎓", label:"Mestrado", val:"Bioquímica, UFBA" },
  { icon:"🔬", label:"Doutorado em andamento", val:"Bioquímica e Biologia Molecular" },
  { icon:"🏥", label:"Clínica", val:"+6 anos em consultório" },
  { icon:"📊", label:"Especialidade", val:"Emagrecimento & Performance" },
];

export default function Authority() {
  const isMobile = useIsMobile();
  const [hRef, hS] = useReveal(0);
  const [pRef, pS] = useReveal(0.15);
  const [bRef, bS] = useReveal(0.25);

  const dark = P;
  const mid  = `${P}AA`;

  /* ── MOBILE ─────────────────────────────────────────────── */
  if (isMobile) {
    return (
      <section style={{ backgroundColor:"#FFFFF2", padding:"72px 0 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-5%", right:"-5%", width:280, height:280, borderRadius:"50%", background:`radial-gradient(circle, ${T}18 0%, transparent 65%)`, pointerEvents:"none" }} />

        <div style={{ padding:"0 24px", position:"relative" }}>
          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:"40px" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:8,
              fontSize:"10px", fontWeight:700, color:T, letterSpacing:"0.14em", textTransform:"uppercase",
              padding:"6px 16px", borderRadius:"100px",
              border:`1px solid ${T}44`, backgroundColor:`${T}12`,
              marginBottom:"18px",
            }}>
              <span style={{ width:5, height:5, borderRadius:"50%", backgroundColor:T, display:"inline-block" }} />
              Seu professor
            </span>
            <h2 style={{ fontSize:"32px", fontWeight:900, color:dark, lineHeight:1.1, letterSpacing:"-0.03em" }}>
              Quem vai te guiar{" "}
              <span style={{ color:T }}>nessa jornada?</span>
            </h2>
          </div>

          {/* Photo */}
          <GlowCard tilt glowColor="teal" style={{ "--radius":"24", borderRadius:24, paddingBottom:"115%", position:"relative", overflow:"hidden", marginBottom:10 } as React.CSSProperties & Record<string, string | number>}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/IMG_4615 copiar 5.png" alt="Rafael Fildes" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
            <div style={{ position:"absolute", bottom:14, left:12, right:12, padding:"12px 14px", borderRadius:12, backgroundColor:"rgba(23,58,57,0.95)", border:`1px solid ${T}33` }}>
              <p style={{ fontSize:"9px", fontWeight:700, color:T, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:3 }}>Doutorado em andamento</p>
              <p style={{ fontSize:"13px", fontWeight:700, color:"#FFFFF2" }}>Bioquímica e Biologia Molecular</p>
            </div>
          </GlowCard>

          {/* Credentials 2x2 */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:36 }}>
            {creds.map((c) => (
              <GlowCard key={c.label} tilt glowColor="teal" style={{ "--radius":"10", borderRadius:10, padding:"8px 10px", display:"flex", gap:8, alignItems:"center" } as React.CSSProperties & Record<string, string | number>}>
                <span style={{ fontSize:14, flexShrink:0 }}>{c.icon}</span>
                <div>
                  <p style={{ fontSize:"8px", fontWeight:700, color:T, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:2 }}>{c.label}</p>
                  <p style={{ fontSize:"11px", fontWeight:700, color:"#FFFFF2", lineHeight:1.3 }}>{c.val}</p>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Bio */}
          <div>
            <h3 style={{ fontSize:"30px", fontWeight:900, color:dark, lineHeight:1, marginBottom:6, letterSpacing:"-0.03em" }}>
              Rafael Fildes
            </h3>
            <p style={{ fontSize:"15px", fontWeight:600, color:T, marginBottom:18 }}>
              Nutricionista · Mestre · Professor
            </p>
            <p style={{ fontSize:"15px", fontStyle:"italic", color:mid, lineHeight:1.75, fontWeight:400, marginBottom:18 }}>
              "Como transformar ciência complexa em resultado real no consultório?", essa pergunta guiou toda a minha carreira acadêmica.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              <p style={{ fontSize:"14px", color:mid, lineHeight:1.85, fontWeight:400 }}>
                Sou Mestre em Bioquímica pela UFBA e curso o Doutorado em Bioquímica e Biologia Molecular. Há mais de 6 anos atuo em consultório com foco em emagrecimento e performance baseados em evidências.
              </p>
              <p style={{ fontSize:"14px", color:mid, lineHeight:1.85, fontWeight:400 }}>
                Já formei centenas de alunos e profissionais que saíram da "decoreba" para o raciocínio clínico de verdade.{" "}
                <strong style={{ color:dark, fontWeight:700 }}>O Atlas da Dieta é a síntese de tudo que aprendi no laboratório e na prática clínica.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP (unchanged) ─────────────────────────────────── */
  return (
    <section style={{ backgroundColor:"#FFFFF2", padding:"140px 0", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle, ${T}18 0%, transparent 65%)`, pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-5%", left:"-5%", width:300, height:300, borderRadius:"50%", background:`radial-gradient(circle, ${T}10 0%, transparent 65%)`, pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 40px", position:"relative" }}>
        <div ref={hRef} style={{ ...hS, marginBottom:"80px", textAlign:"center" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:8,
            fontSize:"11px", fontWeight:700, color:T, letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"6px 18px", borderRadius:"100px",
            border:`1px solid ${T}44`, backgroundColor:`${T}12`,
            marginBottom:"28px",
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", backgroundColor:T, display:"inline-block" }} />
            Seu professor
          </span>
          <h2 style={{ fontSize:"clamp(38px, 5vw, 72px)", fontWeight:900, color:dark, lineHeight:1.05, letterSpacing:"-0.035em" }}>
            Quem vai te guiar<br/>
            <span style={{ color:T }}>nessa jornada?</span>
          </h2>
        </div>

        <div className="auth-grid" style={{ display:"grid", gridTemplateColumns:"380px 1fr", gap:"96px", alignItems:"center" }}>
          <div ref={pRef} style={pS}>
            <GlowCard tilt glowColor="teal" style={{ "--radius": "28", borderRadius:28, paddingBottom:"118%", position:"relative", overflow:"hidden" } as React.CSSProperties & Record<string, string | number>}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/IMG_4615 copiar 5.png" alt="Rafael Fildes" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
              <div style={{ position:"absolute", bottom:20, left:16, right:16, padding:"16px 18px", borderRadius:14, backgroundColor:"rgba(23,58,57,0.95)", border:`1px solid ${T}33` }}>
                <p style={{ fontSize:"10px", fontWeight:700, color:T, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>Doutorado em andamento</p>
                <p style={{ fontSize:"14px", fontWeight:700, color:"#FFFFF2" }}>Bioquímica e Biologia Molecular</p>
              </div>
            </GlowCard>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:12 }}>
              {creds.map((c) => (
                <GlowCard key={c.label} tilt glowColor="teal" style={{ "--radius": "10", borderRadius:10, padding:"6px 8px", display:"flex", gap:8, alignItems:"center" } as React.CSSProperties & Record<string, string | number>}>
                  <span style={{ fontSize:14, flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontSize:"8px", fontWeight:700, color:T, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:2 }}>{c.label}</p>
                    <p style={{ fontSize:"11px", fontWeight:700, color:"#FFFFF2", lineHeight:1.3 }}>{c.val}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          <div ref={bRef} style={bS}>
            <h3 style={{ fontSize:"clamp(40px, 4vw, 56px)", fontWeight:900, color:dark, lineHeight:1, marginBottom:8, letterSpacing:"-0.03em" }}>
              Rafael Fildes
            </h3>
            <p style={{ fontSize:"17px", fontWeight:600, color:T, marginBottom:36 }}>
              Nutricionista · Mestre · Professor
            </p>
            <p style={{ fontSize:"17px", fontStyle:"italic", color:mid, lineHeight:1.75, fontWeight:400, marginBottom:36 }}>
              "Como transformar ciência complexa em resultado real no consultório?", essa pergunta guiou toda a minha carreira acadêmica.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              <p style={{ fontSize:"15px", color:mid, lineHeight:1.85, fontWeight:400 }}>
                Sou Mestre em Bioquímica pela UFBA e curso o Doutorado em Bioquímica e Biologia Molecular. Há mais de 6 anos atuo em consultório com foco em emagrecimento e performance baseados em evidências.
              </p>
              <p style={{ fontSize:"15px", color:mid, lineHeight:1.85, fontWeight:400 }}>
                Já formei centenas de alunos e profissionais que saíram da "decoreba" para o raciocínio clínico de verdade.{" "}
                <strong style={{ color:dark, fontWeight:700 }}>O Atlas da Dieta é a síntese de tudo que aprendi no laboratório e na prática clínica.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .auth-grid{grid-template-columns:1fr!important;gap:56px!important}
        }
      `}</style>
    </section>
  );
}

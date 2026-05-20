"use client";
import { useState, useRef, useEffect } from "react";
import { ShineButton } from "@/components/ui/shine-button";
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
    opacity: v ? 1 : 0, transform: v ? "none" : "translateY(32px)",
    transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
  }] as const;
}

const faqs = [
  { q:"O curso serve para quem está no início da faculdade?", a:"Sim. Quanto mais cedo você entender o raciocínio por trás das dietas, mais fácil será o restante da graduação. O conteúdo é denso, mas explicado de forma progressiva e didática." },
  { q:"As aulas são ao vivo?", a:"Foram gravadas ao vivo com turmas anteriores, o que é ainda melhor, porque você tem acesso imediato a todo o conteúdo e às dúvidas reais que surgiram durante os encontros." },
  { q:"Quanto tempo tenho de acesso?", a:"1 ano de acesso ilimitado à plataforma para assistir e revisar as aulas no seu ritmo, quantas vezes quiser." },
  { q:"Recebo certificado?", a:"Sim. Ao finalizar as aulas, você emite o certificado de conclusão direto na plataforma, válido para horas complementares e valorizar o currículo." },
  { q:"Quais são as formas de pagamento?", a:"À vista via PIX por R$ 197,00 ou parcelado em até 12× no cartão de crédito, sem juros." },
];

function Item({ q, a, index }: { q:string; a:string; index:number }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{
      borderRadius:16, cursor:"pointer", overflow:"hidden",
      background: open
        ? `linear-gradient(135deg, ${T}0C 0%, ${T}06 100%)`
        : `rgba(255,255,242,0.025)`,
      border:`1px solid ${open ? T+"44" : S+"0C"}`,
      transition:"border-color 0.25s, background 0.25s",
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:20, padding:"26px 32px" }}>
        <span style={{ fontSize:"13px", fontWeight:800, color: open ? T : `${S}25`, flexShrink:0, transition:"color 0.25s", fontVariantNumeric:"tabular-nums" }}>
          {String(index+1).padStart(2,"0")}
        </span>
        <p style={{ flex:1, fontSize:"16px", fontWeight:600, color: open ? S : `${S}BB`, lineHeight:1.5, transition:"color 0.25s" }}>
          {q}
        </p>
        <div style={{
          width:32, height:32, borderRadius:"50%", flexShrink:0,
          backgroundColor: open ? T : `${T}15`,
          border:`1px solid ${T}35`,
          display:"flex", alignItems:"center", justifyContent:"center",
          transition:"transform 0.3s, background 0.25s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          <span style={{ fontSize:20, lineHeight:1, color: open ? P : T, fontWeight:700 }}>+</span>
        </div>
      </div>
      <div style={{
        maxHeight: open ? "300px" : "0px",
        overflow:"hidden",
        transition:"max-height 0.4s ease",
      }}>
        <p style={{ padding:"0 32px 26px 72px", fontSize:"15px", color:`${S}66`, lineHeight:1.85, fontWeight:400 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const isMobile = useIsMobile();
  const [hRef, hS] = useReveal(0);
  const [fRef, fS] = useReveal(0.2);
  const [cRef, cS] = useReveal(0.1);

  return (
    <section className="faq-section" style={{ backgroundColor:P, padding:"140px 0", position:"relative", overflow:"hidden" }}>
      {/* Top-right decorative */}
      <div style={{ position:"absolute", top:"-5%", right:"-5%", width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle, ${T}0A 0%, transparent 65%)`, pointerEvents:"none" }} />

      <div className="faq-inner" style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 40px" }}>

        {/* Header */}
        <div ref={hRef} style={{ ...hS, display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"flex-end", marginBottom:"88px" }} className="faq-header">
          <div>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:8,
              fontSize:"11px", fontWeight:700, color:T, letterSpacing:"0.14em", textTransform:"uppercase",
              padding:"6px 18px", borderRadius:"100px",
              border:`1px solid ${T}30`, backgroundColor:`${T}08`,
              marginBottom:"28px",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", backgroundColor:T, display:"inline-block" }} />
              Dúvidas
            </span>
            <h2 style={{ fontSize:"clamp(36px, 4.5vw, 60px)", fontWeight:900, color:S, lineHeight:1.08, letterSpacing:"-0.03em" }}>
              Perguntas{" "}<span style={{ color:T }}>frequentes</span>
            </h2>
          </div>
          {/* WhatsApp card */}
          <div ref={cRef} style={{
            ...cS, borderRadius:20, padding:"32px 36px",
            background:`linear-gradient(145deg, ${T}0C 0%, ${T}06 100%)`,
            border:`1px solid ${T}30`,
          }}>
            <p style={{ fontSize:"14px", fontWeight:700, color:S, marginBottom:8, lineHeight:1.4 }}>
              Ainda tem dúvidas? Nossa equipe responde.
            </p>
            <p style={{ fontSize:"13px", color:`${S}50`, marginBottom:20, fontWeight:400 }}>
              Segunda a sexta · 9h às 18h
            </p>
            <a
              href="https://wa.me/5571991631437"
              target="_blank" rel="noopener noreferrer"
              style={{
                display:"inline-flex", alignItems:"center", gap:10,
                padding:"12px 24px", borderRadius:12,
                backgroundColor:"#25D366", color:"#fff",
                fontSize:"14px", fontWeight:700,
                textDecoration:"none",
                transition:"opacity 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              {/* SUBSTITUIR: número do WhatsApp */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
              </svg>
              Falar com o suporte
            </a>
          </div>
        </div>

        {/* Accordion */}
        <div ref={fRef} style={{ ...fS, display:"flex", flexDirection:"column", gap:10, marginBottom:"96px" }}>
          {faqs.map((f, i) => <Item key={f.q} q={f.q} a={f.a} index={i} />)}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign:"center", paddingTop:48, borderTop:`1px solid ${S}0D` }}>
          <p style={{ fontSize:"16px", color:`${S}44`, marginBottom:8, fontWeight:400 }}>
            Ainda na dúvida?
          </p>
          <p style={{ fontSize:"clamp(20px, 2.5vw, 28px)", fontWeight:800, color:S, marginBottom:32, letterSpacing:"-0.02em", lineHeight:1.3 }}>
            Você está a uma decisão de sair da decoreba<br/>
            <span style={{ color:T }}>e dominar de verdade.</span>
          </p>
          <ShineButton href="#investimento" style={{
            backgroundColor:T, color:P,
            padding: isMobile ? "13px 24px" : "20px 56px",
            borderRadius: isMobile ? 12 : 16,
            fontSize: isMobile ? "13px" : "17px",
            fontWeight:800,
            boxShadow:`0 8px 40px ${T}44`,
            whiteSpace: isMobile ? "nowrap" : "normal",
          }}>
            Quero garantir meu acesso agora
          </ShineButton>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.faq-header{grid-template-columns:1fr!important;gap:40px!important}}
        @media(max-width:768px){
          .faq-section { padding: 72px 0 !important; }
          .faq-inner { padding: 0 20px !important; text-align: center !important; }
          .faq-header { margin-bottom: 48px !important; }
          .faq-header > div:first-child { display: flex !important; flex-direction: column !important; align-items: center !important; }
          .faq-header > div:last-child { display: flex !important; flex-direction: column !important; align-items: center !important; }
          .faq-item-row { padding: 20px 20px !important; justify-content: center !important; }
          .faq-item-answer { padding: 0 20px 20px 20px !important; font-size: 14px !important; text-align: center !important; }
          .faq-final-cta { padding-top: 40px !important; display: flex !important; flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}

"use client";

const S = "#FFFFF2";
const T = "#61BFBF";
const P = "#173A39";

const links = [
  { label:"O Programa", href:"#" },
  { label:"O Professor", href:"#" },
  { label:"Investimento", href:"#investimento" },
  { label:"Dúvidas", href:"#" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor:"#040C0B", position:"relative", overflow:"hidden" }}>
      {/* Top glow */}
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:600, height:200, background:`radial-gradient(ellipse, ${T}10 0%, transparent 70%)`, pointerEvents:"none" }} />

      {/* Main */}
      <div className="footer-main" style={{ maxWidth:"1200px", margin:"0 auto", padding:"80px 40px 56px", position:"relative" }}>

        {/* Top row — brand + nav */}
        <div className="footer-top" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:40, marginBottom:64 }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ width:8, height:8, borderRadius:"50%", backgroundColor:T }} />
              <span style={{ fontSize:"20px", fontWeight:900, color:S, letterSpacing:"-0.02em" }}>Atlas da Dieta</span>
            </div>
            <p style={{ fontSize:"14px", color:`${S}40`, lineHeight:1.75, fontWeight:400, maxWidth:260 }}>
              O curso que transforma a decoreba em domínio bioquímico real, para nutricionistas que querem ir além.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize:"11px", fontWeight:700, color:`${S}28`, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:20 }}>
              Navegação
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {links.map(({ label, href }) => (
                <a key={label} href={href} style={{ fontSize:"14px", color:`${S}50`, textDecoration:"none", fontWeight:400, transition:"color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = T; }}
                  onMouseLeave={e => { e.currentTarget.style.color = `${S}50`; }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize:"11px", fontWeight:700, color:`${S}28`, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:20 }}>
              Suporte
            </p>
            <p style={{ fontSize:"14px", color:`${S}50`, lineHeight:1.8, fontWeight:400 }}>
              Atendimento via WhatsApp
              <br/>Segunda a sexta · 9h às 18h
            </p>
          </div>
        </div>

        {/* Divider with tagline */}
        <div style={{ display:"flex", alignItems:"center", gap:24, marginBottom:32 }}>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${S}10, transparent)` }} />
          <p style={{ fontSize:"13px", fontStyle:"italic", color:`${S}25`, whiteSpace:"nowrap", fontWeight:400 }}>
            Da decoreba ao domínio real.
          </p>
          <div style={{ flex:1, height:1, background:`linear-gradient(to left, ${S}10, transparent)` }} />
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:"12px", color:`${S}25`, fontWeight:400 }}>
            © {new Date().getFullYear()} Atlas da Dieta. Todos os direitos reservados.
          </p>
          <p style={{ fontSize:"12px", color:`${S}25`, fontWeight:400 }}>
            {/* SUBSTITUIR: CRN real */}
            Rafael Fildes · Nutricionista · CRN-5 00000
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .footer-top{grid-template-columns:1fr!important; gap:32px!important; margin-bottom:40px!important;}
          .footer-main{padding:56px 20px 40px!important;}
          .footer-bottom{flex-direction:column!important; align-items:center!important; text-align:center!important; gap:8px!important;}
        }
      `}</style>
    </footer>
  );
}

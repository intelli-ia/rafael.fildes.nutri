"use client";

import { useEffect, useState } from "react";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { ShineButton } from "@/components/ui/shine-button";

const PRIMARY = "#173A39";
const SECONDARY = "#FFFFF2";
const TERTIARY = "#61BFBF";

const AVATARS = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=9",
  "https://i.pravatar.cc/40?img=20",
];

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function Hero() {
  const alunos = useCountUp(150, 1800);
  const anos = useCountUp(6, 1400);

  return (
    /* Wrapper: ocupa 100vh + extensão do fundo abaixo do fold */
    <section
      style={{
        position: "relative",
        height: "calc(100vh + 80px)",
        backgroundColor: "#FFFFFF",
        zIndex: 1,
      }}
    >
      {/* Fundo verde com bordas arredondadas — extende até o fim do wrapper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: PRIMARY,
          borderBottomLeftRadius: "56px",
          borderBottomRightRadius: "56px",
          overflow: "hidden",
        }}
      >
        {/* z-0 — foto de fundo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Group 1171276512.png"
          alt=""
          style={{
            position: "absolute",
            right: "-26%",
            top: "-25%",
            height: "185%",
            width: "auto",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* z-1 — gradiente esquerdo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: `linear-gradient(to right, ${PRIMARY} 40%, ${PRIMARY}99 58%, ${PRIMARY}22 75%, transparent 100%)`,
            pointerEvents: "none",
          }}
        />
        {/* z-1 — gradiente inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "120px",
            zIndex: 1,
            background: `linear-gradient(to bottom, transparent, ${PRIMARY})`,
            pointerEvents: "none",
          }}
        />

        {/* z-2 — shapes animadas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <ElegantShape
            delay={0.3}
            width={520}
            height={130}
            rotate={12}
            color="rgba(97,191,191,0.02)"
            style={{ left: "-4%", top: "-4%" }}
          />
          <ElegantShape
            delay={0.5}
            width={380}
            height={90}
            rotate={-15}
            color="rgba(97,191,191,0.015)"
            style={{ left: "8%", bottom: "14%" }}
          />
          <ElegantShape
            delay={0.4}
            width={260}
            height={65}
            rotate={-8}
            color="rgba(255,255,242,0.01)"
            style={{ left: "42%", top: "52%" }}
          />
          <ElegantShape
            delay={0.7}
            width={170}
            height={46}
            rotate={22}
            color="rgba(97,191,191,0.015)"
            style={{ left: "3%", top: "52%" }}
          />
        </div>
      </div>

      {/* Conteúdo — centralizado dentro apenas dos 100vh visíveis */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 40px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "580px" }}>
            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(26px, 2.8vw, 40px)",
                fontWeight: 900,
                color: SECONDARY,
                lineHeight: 1.15,
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Em <span style={{ color: TERTIARY }}>8 aulas</span>, aprenda a
              dominar o mecanismo fisiológico de qualquer dieta.
            </h1>

            {/* H2 */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: `${SECONDARY}BB`,
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Entenda, compare e aplique diferentes dietas com segurança
              científica. Domine os efeitos metabólicos e fisiológicos ainda
              na faculdade ou já no consultório.
            </p>

            {/* CTA */}
            <ShineButton
              href="#investimento"
              style={{
                backgroundColor: TERTIARY,
                color: PRIMARY,
                padding: "18px 36px",
                borderRadius: "14px",
                fontSize: "16px",
                boxShadow: `0 0 32px ${TERTIARY}44`,
              }}
            >
              Quero dominar as dietas de verdade
            </ShineButton>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                marginTop: "48px",
                paddingTop: "48px",
                borderTop: `1px solid ${SECONDARY}15`,
              }}
            >
              {/* +150 com avatares */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: TERTIARY, lineHeight: 1 }}>
                    +{alunos}
                  </div>
                  <div style={{ display: "flex" }}>
                    {AVATARS.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt=""
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          border: `2px solid ${PRIMARY}`,
                          marginLeft: i === 0 ? 0 : "-8px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: "13px", color: `${SECONDARY}66`, fontWeight: 400 }}>
                  alunos formados
                </div>
              </div>

              <div style={{ width: "1px", height: "48px", backgroundColor: `${SECONDARY}15`, flexShrink: 0 }} />

              <div>
                <div style={{ fontSize: "22px", fontWeight: 800, color: TERTIARY, lineHeight: 1, marginBottom: "4px" }}>
                  +{anos} anos
                </div>
                <div style={{ fontSize: "13px", color: `${SECONDARY}66`, fontWeight: 400 }}>
                  em consultório
                </div>
              </div>

              <div style={{ width: "1px", height: "48px", backgroundColor: `${SECONDARY}15`, flexShrink: 0 }} />

              <div>
                <div style={{ fontSize: "22px", fontWeight: 800, color: TERTIARY, lineHeight: 1, marginBottom: "4px" }}>
                  Mestre
                </div>
                <div style={{ fontSize: "13px", color: `${SECONDARY}66`, fontWeight: 400 }}>
                  em Bioquímica pela UFBA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

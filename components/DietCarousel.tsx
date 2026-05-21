'use client';

import { TestimonialsColumn, TestimonialsRow } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useIsMobile } from "@/lib/useIsMobile";

const PRIMARY  = '#173A39';
const TERTIARY = '#61BFBF';
const WHITE    = '#FFFFFF';

const col1Diets = [
  { name: 'Low Carb',           subtitle: 'Restrição de Carboidratos',  icon: '🥩', accent: '#D97706' },
  { name: 'Cetogênica',         subtitle: 'Cetose Metabólica',           icon: '🧠', accent: '#9333EA' },
  { name: 'Mediterrânea',       subtitle: 'Padrão Alimentar Secular',    icon: '🫒', accent: '#16A34A' },
  { name: 'DASH',               subtitle: 'Controle da Pressão Arterial',icon: '❤️', accent: '#DC2626' },
];

const col2Diets = [
  { name: 'Jejum Intermitente', subtitle: 'Janela de Alimentação',       icon: '⏱️', accent: '#2563EB' },
  { name: 'Plant-Based',        subtitle: 'Base Vegetal Integral',        icon: '🌱', accent: '#059669' },
  { name: 'Proteica',           subtitle: 'Alta Ingestão Proteica',       icon: '💪', accent: '#EA580C' },
  { name: 'Hipoalórica',        subtitle: 'Déficit Calórico',             icon: '⚖️', accent: '#64748B' },
];

const col3Diets = [
  { name: 'Paleo',              subtitle: 'Alimentação Ancestral',        icon: '🦴', accent: '#92400E' },
  { name: 'Flexitariana',       subtitle: 'Redução Gradual de Carnes',    icon: '🥗', accent: '#0D9488' },
  { name: 'Anti-inflamatória',  subtitle: 'Modulação da Inflamação',      icon: '🌿', accent: '#0891B2' },
  { name: 'Volumétrica',        subtitle: 'Saciedade por Volume',         icon: '🥦', accent: '#7C3AED' },
];

function Card({ diet }: { diet: typeof col1Diets[0] }) {
  return (
    <div style={{
      width: '260px',
      borderRadius: '20px',
      background: '#EEF4F3',
      border: '1px solid rgba(23,58,57,0.09)',
      boxShadow: '0 4px 20px rgba(23,58,57,0.07), inset 0 1px 0 rgba(255,255,255,0.8)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      height: '140px',
      flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: -20, right: -20,
        width: 80, height: 80, borderRadius: '50%',
        background: `radial-gradient(circle, ${diet.accent}28 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        backgroundColor: `${diet.accent}14`,
        border: `1px solid ${diet.accent}28`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20,
      }}>
        {diet.icon}
      </div>
      <div>
        <p style={{ fontSize: '15px', fontWeight: 800, color: '#173A39', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '4px' }}>
          {diet.name}
        </p>
        <p style={{ fontSize: '10px', color: '#61BFBF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {diet.subtitle}
        </p>
      </div>
      <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(97,191,191,0.5), transparent)' }} />
    </div>
  );
}

export default function DietCarousel() {
  const isMobile = useIsMobile();
  const col1 = col1Diets.map((diet, i) => <Card key={i} diet={diet} />);
  const col2 = col2Diets.map((diet, i) => <Card key={i} diet={diet} />);
  const col3 = col3Diets.map((diet, i) => <Card key={i} diet={diet} />);

  return (
    <section style={{ backgroundColor: WHITE, padding: '96px 0', overflow: 'hidden' }} className="diet-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} className="diet-inner">
      <style>{`
        @media (max-width: 768px) {
          .diet-section { padding: 64px 0 !important; }
          .diet-inner { padding: 0 20px !important; }
        }
      `}</style>

        {/* Header centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ fontSize: '12px', fontWeight: 700, color: TERTIARY, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Conteúdo do curso
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, color: PRIMARY, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Você dominará<br/>
            <span style={{ color: TERTIARY }}>todas essas dietas.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#5A6B6A', lineHeight: 1.8, fontWeight: 400, maxWidth: '480px' }}>
            Com raciocínio bioquímico real, não com listas de alimentos para decorar.
          </p>
        </motion.div>

        {/* Mobile: linhas horizontais direita → esquerda */}
        {isMobile && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}>
            <TestimonialsRow items={col1} duration={10} />
            <TestimonialsRow items={col2} duration={13} />
            <TestimonialsRow items={col3} duration={11} />
          </div>
        )}

        {/* Desktop: linhas horizontais direita → esquerda */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}>
            <TestimonialsRow items={col1} duration={28} />
            <TestimonialsRow items={col2} duration={22} />
            <TestimonialsRow items={col3} duration={25} />
          </div>
        )}

      </div>
    </section>
  );
}

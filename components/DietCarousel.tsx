'use client';

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

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
  const col1 = col1Diets.map((diet, i) => <Card key={i} diet={diet} />);
  const col2 = col2Diets.map((diet, i) => <Card key={i} diet={diet} />);
  const col3 = col3Diets.map((diet, i) => <Card key={i} diet={diet} />);

  return (
    <section style={{ backgroundColor: WHITE, padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

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
            Você dominará{' '}
            <span style={{ color: TERTIARY }}>todas essas dietas.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#5A6B6A', lineHeight: 1.8, fontWeight: 400, maxWidth: '480px' }}>
            Com raciocínio bioquímico real, não com listas de alimentos para decorar.
          </p>
        </motion.div>

        {/* Colunas animadas */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          maxHeight: '740px',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}>
          <TestimonialsColumn items={col1} duration={28} />
          <TestimonialsColumn items={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn items={col3} duration={25} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
}

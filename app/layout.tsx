import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Atlas da Dieta — Domine o mecanismo fisiológico de qualquer dieta",
  description:
    "Em 8 aulas, entenda, compare e aplique diferentes dietas com segurança científica. Domine os efeitos metabólicos e fisiológicos ainda na faculdade ou já no consultório.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cairo.variable}>
      <body style={{ fontFamily: "'Cairo', sans-serif" }}>{children}</body>
    </html>
  );
}

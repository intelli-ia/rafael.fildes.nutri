import Hero from "@/components/Hero";
import DietCarousel from "@/components/DietCarousel";
import PainPoints from "@/components/PainPoints";
import WhatYouLearn from "@/components/WhatYouLearn";
import Pricing from "@/components/Pricing";
import Authority from "@/components/Authority";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <DietCarousel />
      <PainPoints />
      <WhatYouLearn />
      <Pricing />
      <Authority />
      <FAQ />
      <Footer />
    </main>
  );
}

import React from 'react';
import { ParticleBackground } from './components/ParticleBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { WhatIsSection } from './components/WhatIsSection.tsx';
import { ArchitectureDiagram } from './components/ArchitectureDiagram.tsx';
import { ObjectiveSection } from './components/ObjectiveSection.tsx';
import { EvolutionSection } from './components/EvolutionSection.tsx';
import { PrinciplesSection } from './components/PrinciplesSection.tsx';
import { ClosingSection } from './components/ClosingSection.tsx';

export default function App() {
  const handleExploreClick = () => {
    const el = document.getElementById('que-es');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">
      {/* Dynamic Interactive Blue Particle & Energy Line Canvas */}
      <ParticleBackground intensity="medium" />

      {/* Cybernetic grid & radial vignette overlays */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0 opacity-40" />
      <div className="fixed inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar onExploreClick={handleExploreClick} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section: COUTEX Presentation */}
        <HeroSection />

        {/* 2. ¿Qué es COUTEX? */}
        <WhatIsSection />

        {/* Technical Architecture Interlude */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ArchitectureDiagram />
        </div>

        {/* 3. ¿Cuál es su objetivo? */}
        <ObjectiveSection />

        {/* 4. ¿Cómo evolucionará? */}
        <EvolutionSection />

        {/* 5. Principios de COUTEX */}
        <PrinciplesSection />
      </main>

      {/* 6. Closing Section with Manifesto Quote */}
      <ClosingSection />
    </div>
  );
}

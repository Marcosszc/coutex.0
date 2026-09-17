import React from 'react';
import { CoutexCoreVisual } from './CoutexCoreVisual.tsx';
import { ShieldCheck, Cpu, ArrowDown, Sparkles, Terminal, Activity } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient lighting accents in pure blue shades */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-800/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & Introduction Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tech Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#030d29]/90 border border-blue-600/40 text-xs font-mono-tech text-sky-300 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="tracking-wider uppercase">Proyecto Tecnológico en Desarrollo</span>
              <span className="text-blue-500">|</span>
              <span className="text-sky-400 font-semibold">v0.1 Blueprint</span>
            </div>

            {/* Main Name: COUTEX */}
            <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none uppercase select-none">
              <span className="inline-block transition-all duration-300 hover:text-sky-300">
                COU<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-blue-600">TEX</span>
              </span>
            </h1>

            {/* Subtitle exact match from prompt */}
            <h2 className="font-chakra font-bold text-xl sm:text-2xl md:text-3xl text-sky-400 tracking-wide mt-4 md:mt-5 text-balance">
              Inteligencia Artificial para Sistemas Autónoma
            </h2>

            {/* Exact description phrase from prompt */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl border-l-2 border-sky-500/60 pl-4 bg-gradient-to-r from-blue-950/30 to-transparent py-1.5 rounded-r">
              &ldquo;Un sistema inteligente diseñado para evolucionar junto a su usuario.&rdquo;
            </p>

            {/* Extended context intro from prompt */}
            <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              COUTEX redefine el vínculo entre el ser humano y la máquina: la computadora deja de ser una simple caja de herramientas aisladas para integrar una <strong className="text-sky-300 font-semibold">capa inteligente adaptativa</strong>, orientada a comprender el flujo de trabajo, optimizar la experiencia de uso y asistir proactivamente, manteniendo siempre el control en manos del usuario.
            </p>

            {/* Key Pillars Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-8 pt-6 border-t border-blue-950/80">
              <div className="p-3 rounded-lg bg-[#040d24]/70 border border-blue-900/40 hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-2 text-sky-400 font-chakra font-semibold text-xs tracking-wider uppercase mb-1">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Soberanía</span>
                </div>
                <p className="text-xs text-slate-400">
                  Sin acciones no autorizadas. Solo actúa bajo confirmación explícita.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#040d24]/70 border border-blue-900/40 hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-2 text-sky-400 font-chakra font-semibold text-xs tracking-wider uppercase mb-1">
                  <Activity className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Evolución</span>
                </div>
                <p className="text-xs text-slate-400">
                  Desarrollo por fases modulares desde su núcleo fundamental.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#040d24]/70 border border-blue-900/40 hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-2 text-sky-400 font-chakra font-semibold text-xs tracking-wider uppercase mb-1">
                  <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Integración</span>
                </div>
                <p className="text-xs text-slate-400">
                  Capa inteligente nativa acoplada al entorno del sistema operativo.
                </p>
              </div>
            </div>

            {/* Action buttons to jump to briefing sections */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#que-es"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-600 hover:to-sky-500 text-white font-chakra font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Conocer el Proyecto</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#principios"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#030919] hover:bg-[#061435] border border-blue-800/60 hover:border-sky-400/80 text-sky-300 font-chakra font-medium text-sm tracking-wider uppercase transition-all"
              >
                <span>Principios Éticos y de Control</span>
              </a>
            </div>

          </div>

          {/* Visual Presentation Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full flex flex-col items-center">
              
              {/* Header label for the core presentation */}
              <div className="w-full flex items-center justify-between px-4 py-2 mb-2 rounded-t-lg bg-[#030b20] border-x border-t border-blue-900/50 text-[11px] font-mono-tech text-sky-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  REPRESENTACIÓN VISUAL DEL NÚCLEO
                </span>
                <span className="text-slate-500">SYS_COUTEX_AI</span>
              </div>

              {/* Holographic container with borders */}
              <div className="w-full p-4 sm:p-6 rounded-b-lg rounded-t-none bg-gradient-to-b from-[#03091b]/95 via-[#020614]/90 to-[#01040e]/95 border border-blue-900/50 shadow-[0_0_40px_rgba(14,165,233,0.15)] relative overflow-hidden backdrop-blur-sm">
                
                {/* Visual corner tech decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-400 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-400 pointer-events-none" />

                {/* The Core Visual */}
                <CoutexCoreVisual />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Cpu, ShieldCheck, ArrowUp, Terminal, Layers, Info } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="cierre" className="relative pt-20 pb-12 border-t-2 border-blue-900/60 bg-[#01040b] overflow-hidden">
      
      {/* Intense deep blue ambient back-glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Big Official Statement Banner */}
        <div className="text-center max-w-4xl mx-auto py-12 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-[#030d2a]/95 via-[#02081e]/90 to-[#010411] border border-blue-500/40 shadow-[0_0_60px_rgba(37,99,235,0.25)] relative overflow-hidden">
          
          {/* Subtle light lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/40 text-xs font-mono-tech text-sky-300 mb-6">
            <Cpu className="w-3.5 h-3.5 text-sky-400 animate-spin [animation-duration:12s]" />
            <span>MANIFESTO DE SISTEMA AUTÓNOMO</span>
          </div>

          {/* Name COUTEX */}
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-wider mb-6">
            COU<span className="text-sky-400 text-shadow-[0_0_20px_#38bdf8]">TEX</span>
          </h2>

          {/* Exact required quote from prompt */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-chakra font-semibold text-sky-200 leading-snug max-w-3xl mx-auto mb-8">
            &ldquo;Una inteligencia artificial diseñada para evolucionar junto a su sistema y su usuario.&rdquo;
          </blockquote>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-8">
            COUTEX representa una nueva era para los sistemas informáticos personales: un entorno donde la inteligencia y la autonomía coexisten con el respeto incondicional a la soberanía del usuario.
          </p>

          {/* Technical specification pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono-tech text-sky-300">
            <span className="px-3 py-1 rounded-md bg-[#020921] border border-blue-800/60">
              ARQUITECTURA: MODULAR
            </span>
            <span className="px-3 py-1 rounded-md bg-[#020921] border border-blue-800/60">
              SEGURIDAD: ZERO-UNAUTHORIZED-ACTIONS
            </span>
            <span className="px-3 py-1 rounded-md bg-[#020921] border border-blue-800/60">
              EVOLUCIÓN: PROGRESIVA POR ETAPAS
            </span>
          </div>

        </div>

        {/* Technical Dossier / Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-blue-950 text-slate-400 text-xs sm:text-sm">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-bold text-base text-white">COUTEX</span>
              <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-sky-400">
                PROYECTO
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Página informativa oficial del proyecto de desarrollo tecnológico COUTEX. Inteligencia Artificial para Sistemas Autónoma.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-chakra font-bold text-sm text-sky-300 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-1.5 font-sans text-xs">
              <li>
                <a href="#que-es" className="hover:text-sky-300 transition-colors">
                  ¿Qué es COUTEX?
                </a>
              </li>
              <li>
                <a href="#objetivo" className="hover:text-sky-300 transition-colors">
                  ¿Cuál es su objetivo?
                </a>
              </li>
              <li>
                <a href="#evolucion" className="hover:text-sky-300 transition-colors">
                  ¿Cómo evolucionará?
                </a>
              </li>
              <li>
                <a href="#principios" className="hover:text-sky-300 transition-colors">
                  Principios fundamentales
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-chakra font-bold text-sm text-sky-300 uppercase tracking-wider">
              Compromisos Clave
            </h4>
            <ul className="space-y-1.5 font-sans text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Control estricto del usuario</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>Ejecución contextual supervisada</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Desarrollo modular y escalable</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-chakra font-bold text-sm text-sky-300 uppercase tracking-wider">
              Nota del Proyecto
            </h4>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Este sitio web tiene un propósito exclusivamente informativo y de divulgación técnica del concepto y arquitectura en diseño. No representa un ejecutable ni asistente activo en navegador.
            </p>
          </div>

        </div>

        {/* Bottom Bar with Back to Top and Author Brand */}
        <div className="mt-12 pt-6 border-t border-blue-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-slate-300 font-semibold tracking-wider">
              PROYECTO COUTEX
            </span>
            <span className="hidden sm:inline text-blue-800">•</span>
            <span className="text-sky-400 font-medium">
              &copy; Marcos.szc
            </span>
            <span className="hidden sm:inline text-blue-800">•</span>
            <span className="text-slate-500">
              DOCUMENTO INFORMATIVO OFICIAL
            </span>
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-blue-950/40 hover:bg-blue-900/60 border border-blue-900/50 hover:border-sky-400/60 text-sky-400 hover:text-sky-200 transition-all"
          >
            <span>Volver al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

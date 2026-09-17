import React from 'react';
import { 
  Target, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  Sliders, 
  HelpCircle, 
  FileCheck, 
  Eye, 
  Cpu 
} from 'lucide-react';

export const ObjectiveSection: React.FC = () => {
  return (
    <section id="objetivo" className="relative py-20 md:py-28 border-t border-blue-950/60 scroll-mt-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono-tech text-sky-400 mb-3 uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-sky-400" />
            <span>Misión y Horizonte del Proyecto</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            ¿Cuál es su <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">objetivo</span>?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            COUTEX busca <strong>convertirse progresivamente en un sistema inteligente capaz de asistir al usuario en diferentes áreas de la computadora</strong>, manteniendo siempre el control, la transparencia y la autorización explícita del usuario en todo momento.
          </p>
        </div>

        {/* Core Assistive Domains Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Domain 1 */}
          <div className="p-6 rounded-xl bg-[#03091f]/90 border border-blue-900/40 hover:border-sky-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-chakra font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
              Asistencia Integral del Sistema
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Supervisar el estado general de la computadora, gestionar recursos, organizar espacios de trabajo caóticos y facilitar la navegación entre aplicaciones y archivos complejos.
            </p>
          </div>

          {/* Domain 2 */}
          <div className="p-6 rounded-xl bg-[#03091f]/90 border border-blue-900/40 hover:border-sky-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="font-chakra font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
              Automatización de Flujos
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Detectar tareas repetitivas y ofrecer soluciones inteligentes para automatizarlas, desde conversiones de archivos hasta compilaciones de proyectos o configuraciones rutinarias.
            </p>
          </div>

          {/* Domain 3 */}
          <div className="p-6 rounded-xl bg-[#03091f]/90 border border-blue-900/40 hover:border-sky-500/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-chakra font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
              Comprensión del Contexto Activo
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              No limitarse a esperar instrucciones aisladas, sino entender el proyecto en curso para ofrecer sugerencias pertinentes, resolver dudas técnicas y apoyar la toma de decisiones.
            </p>
          </div>

        </div>

        {/* The Non-Negotiable Rule: User Authorization Architecture */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#040f30] via-[#020921] to-[#010514] border-2 border-sky-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(14,165,233,0.18)]">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-blue-900/50">
            <div>
              <div className="flex items-center gap-2.5 text-sky-400 font-mono-tech text-xs uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4 text-sky-400" />
                <span>Principio Fundamental del Proyecto</span>
              </div>
              <h3 className="font-chakra font-bold text-2xl sm:text-3xl text-white">
                La Regla de Soberanía del Usuario
              </h3>
            </div>

            <div className="px-4 py-2 rounded-lg bg-blue-950/80 border border-sky-400/50 text-sky-300 text-xs font-mono-tech flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>CERO ACCIONES SIN AUTORIZACIÓN</span>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-4xl">
            Un principio fundamental del proyecto es que <strong>COUTEX jamás debe realizar acciones que el usuario no haya solicitado o autorizado previamente</strong>. La inteligencia artificial debe respetar la integridad del sistema operativo y la privacidad de la persona.
          </p>

          {/* Duality Table: What it CAN do autonomously vs What REQUIRES authorization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Left Box: Consultative & Analytical (Autonomous) */}
            <div className="p-5 rounded-xl bg-[#03091d]/80 border border-blue-800/40">
              <div className="flex items-center gap-2 font-chakra font-bold text-base text-sky-300 mb-3">
                <HelpCircle className="w-5 h-5 text-sky-400" />
                <span>Nivel 1: Análisis, Diálogo y Propuesta</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 font-sans">
                Capacidades autónomas y seguras de exploración que no alteran el estado de la computadora:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Conversar de forma natural sobre cualquier duda o tarea.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Sugerir mejoras de flujo de trabajo u optimizaciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Preguntar para aclarar objetivos o resolver ambigüedades.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">✓</span>
                  <span>Analizar situaciones técnicas, archivos de registro y métricas.</span>
                </li>
              </ul>
            </div>

            {/* Right Box: System Changes (Requires Explicit Authorization) */}
            <div className="p-5 rounded-xl bg-[#020b24]/90 border border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <div className="flex items-center gap-2 font-chakra font-bold text-base text-white mb-3">
                <FileCheck className="w-5 h-5 text-sky-400" />
                <span>Nivel 2: Modificación y Ejecución de Sistema</span>
              </div>
              <p className="text-xs text-sky-300/80 mb-4 font-sans">
                Acciones críticas que exigen confirmación explícita e informada del usuario:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">🔒</span>
                  <span>Creación, borrado o modificación de archivos del disco.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">🔒</span>
                  <span>Instalación o actualización de software y dependencias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">🔒</span>
                  <span>Ejecución de scripts, comandos terminal o llamadas al sistema.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">🔒</span>
                  <span>Cambios de configuración en el entorno del sistema operativo.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-6 p-4 rounded-lg bg-blue-950/40 border border-blue-800/40 text-center">
            <span className="text-xs sm:text-sm text-sky-300 font-mono-tech">
              «El usuario es el comandante supremo del sistema; COUTEX es el copiloto inteligente.»
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

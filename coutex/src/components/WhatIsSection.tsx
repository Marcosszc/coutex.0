import React from 'react';
import { 
  Layers, 
  BrainCircuit, 
  Cpu, 
  UserCheck, 
  Workflow, 
  FolderKanban, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const WhatIsSection: React.FC = () => {
  return (
    <section id="que-es" className="relative py-20 md:py-28 border-t border-blue-950/60 scroll-mt-16">
      
      {/* Background glow spot */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono-tech text-sky-400 mb-3 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Definición y Arquitectura Conceptual</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            ¿Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">COUTEX</span>?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            COUTEX es una <strong>inteligencia artificial orientada al control, asistencia y administración inteligente de un sistema informático</strong>. Su propósito es comprender al usuario, aprender de sus interacciones y facilitar el uso integral de la computadora.
          </p>
        </div>

        {/* Conceptual Grid: Paradigm Shift */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left: The Traditional Paradigm */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#03081a]/80 border border-blue-950 text-left flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[11px] font-mono-tech tracking-wider uppercase text-slate-500 block mb-2">
                El paradigma informático convencional
              </span>
              <h3 className="font-chakra font-bold text-xl sm:text-2xl text-slate-200 mb-4">
                La Computadora como Herramienta Pasiva
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                Históricamente, los sistemas operativos responden únicamente a comandos directos, clics y pulsaciones sin conciencia contextual. No recuerdan flujos complejos, no aprenden de la rutina del usuario ni entienden sus objetivos en tiempo real.
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                  <span>El usuario debe gestionar manualmente cada proceso y ventana.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                  <span>Sin memoria contextual de proyectos interrelacionados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                  <span>Herramientas estáticas y aisladas que no cooperan entre sí.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/40 text-xs font-mono-tech text-slate-500 flex items-center justify-between">
              <span>ESTADO: ESTÁTICO</span>
              <span>INTERACCIÓN: 100% MANUAL</span>
            </div>
          </div>

          {/* Right: The COUTEX Solution */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#040f2e]/90 via-[#030a21]/95 to-[#010512] border border-blue-600/40 text-left relative overflow-hidden shadow-[0_0_35px_rgba(37,99,235,0.2)] flex flex-col justify-between">
            
            {/* Ambient blue highlight */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono-tech tracking-wider uppercase text-sky-400">
                  La visión del proyecto
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-blue-900/60 border border-sky-400/40 text-sky-300">
                  CAPA INTELIGENTE DE SISTEMA
                </span>
              </div>

              <h3 className="font-chakra font-bold text-xl sm:text-2xl text-white mb-4">
                Una Capa Inteligente Integrada y Adaptativa
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                COUTEX transforma la computadora en un entorno simbiótico. No busca sustituir la decisión humana, sino actuar como un <strong>organismo inteligente y respetuoso</strong> integrado en el sistema que comprende el contexto de uso, anticipa necesidades técnicas y acompaña activamente el trabajo cotidiano.
              </p>

              {/* 3 Core pillars in this section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-[#030c26]/80 border border-blue-900/50 hover:border-sky-500/50 transition-all">
                  <div className="flex items-center gap-2 text-sky-300 font-chakra font-semibold text-sm mb-1">
                    <BrainCircuit className="w-4 h-4 text-sky-400" />
                    <span>Comprensión del Usuario</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Aprende los patrones de trabajo, horarios habituales, herramientas predilectas y formas en que el usuario estructura su información.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#030c26]/80 border border-blue-900/50 hover:border-sky-500/50 transition-all">
                  <div className="flex items-center gap-2 text-sky-300 font-chakra font-semibold text-sm mb-1">
                    <Workflow className="w-4 h-4 text-sky-400" />
                    <span>Asistencia en Tareas</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Facilita la ejecución de operaciones complejas, búsquedas profundas, organización de datos y diagnóstico del entorno.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#030c26]/80 border border-blue-900/50 hover:border-sky-500/50 transition-all">
                  <div className="flex items-center gap-2 text-sky-300 font-chakra font-semibold text-sm mb-1">
                    <UserCheck className="w-4 h-4 text-sky-400" />
                    <span>Control No Invasivo</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Puede dialogar, proponer y diagnosticar, pero las acciones reales sobre el sistema jamás se ejecutan sin autorización.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#030c26]/80 border border-blue-900/50 hover:border-sky-500/50 transition-all">
                  <div className="flex items-center gap-2 text-sky-300 font-chakra font-semibold text-sm mb-1">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <span>Arquitectura Escalable</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Capaz de sumar progresivamente modelos de IA, memoria contextual, scripts del SO, acceso a red y herramientas de usuario.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-900/60 text-xs font-mono-tech text-sky-400 flex items-center justify-between">
              <span>ESTADO: SIMBIOSIS INTELIGENTE</span>
              <span>CONTROL: ASISTIDO BAJO AUTORIZACIÓN</span>
            </div>

          </div>

        </div>

        {/* Feature Capabilities Breakdown */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#020719]/90 border border-blue-900/40">
          <h4 className="font-chakra font-bold text-lg text-sky-200 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <span>Capacidades que COUTEX integra como sistema inteligente</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <h5 className="font-mono-tech text-xs uppercase tracking-wider text-sky-400 font-bold">
                01. Inteligencia & Contexto
              </h5>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Capacidad de razonamiento sobre lo que sucede en pantalla, comprensión de archivos abiertos, logs del sistema y peticiones en lenguaje natural.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-mono-tech text-xs uppercase tracking-wider text-sky-400 font-bold">
                02. Memoria & Aprendizaje
              </h5>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Retención de directrices pasadas, proyectos frecuentes y preferencias técnicas, evolucionando para ser más afinado con cada jornada de trabajo.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-mono-tech text-xs uppercase tracking-wider text-sky-400 font-bold">
                03. Herramientas & Conectividad
              </h5>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Puente hacia utilidades del sistema operativo, scripts, automatizaciones y conectividad web supervisada para resolver tareas multidisciplinarias.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

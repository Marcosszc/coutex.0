import React, { useState } from 'react';
import { 
  GitCommit, 
  Cpu, 
  Database, 
  Sparkles, 
  BrainCircuit, 
  Terminal, 
  Network, 
  Zap, 
  CheckCircle, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

interface Stage {
  phase: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  status: 'active' | 'next' | 'future';
  icon: React.ElementType;
}

const STAGES: Stage[] = [
  {
    phase: 'Etapa 01',
    code: 'CORE_KERNEL',
    title: 'Núcleo y Kernel de Seguridad',
    subtitle: 'La base inviolable del sistema',
    description:
      'Construcción del motor central de COUTEX: arquitectura de sandboxing, pasarela de permisos del usuario, procesamiento local seguro y despacho de eventos del sistema operativo.',
    keyFeatures: [
      'Motor de autorización y barrera de seguridad de permisos',
      'Estructura modular desacoplada de baja latencia',
      'Protocolo seguro de comunicación inter-procesos',
      'Telemetría interna y control de integridad de ejecución',
    ],
    status: 'active',
    icon: Cpu,
  },
  {
    phase: 'Etapa 02',
    code: 'MEMORY_LAYER',
    title: 'Memoria Persistente y Contexto',
    subtitle: 'El almacén cognitivo del entorno',
    description:
      'Implementación de la memoria a corto y largo plazo: almacenamiento de preferencias del usuario, historial de flujos de trabajo, esquemas de proyectos y proyectos recurrentes.',
    keyFeatures: [
      'Indexación vectorial local de preferencias y proyectos',
      'Retención estructurada sin comprometer la privacidad',
      'Segmentación de contextos por carpetas y disciplinas',
      'Capacidad de recordar instrucciones y directrices fijas',
    ],
    status: 'next',
    icon: Database,
  },
  {
    phase: 'Etapa 03',
    code: 'LEARNING_ENGINE',
    title: 'Aprendizaje Progresivo',
    subtitle: 'Asimilación de hábitos de trabajo',
    description:
      'Mecanismos adaptativos que analizan cómo trabaja el usuario: identificación de secuencias repetitivas, atajos frecuentes, horarios de productividad y lenguaje habitual.',
    keyFeatures: [
      'Detección de fricciones y cuellos de botella en el flujo',
      'Optimización de sugerencias basada en patrones pasados',
      'Modelado de estilo comunicativo y preferencias de respuesta',
      'Afinación continua sin requerir reentrenamientos masivos',
    ],
    status: 'future',
    icon: Sparkles,
  },
  {
    phase: 'Etapa 04',
    code: 'AI_REASONING',
    title: 'Inteligencia Artificial Profunda',
    subtitle: 'Razonamiento lógico y contextual',
    description:
      'Integración de modelos neuronales y agentes de razonamiento capaces de entender situaciones de alta complejidad, sintaxis de código, documentos técnicos y análisis multidimensional.',
    keyFeatures: [
      'Razonamiento lógico multinivel sobre el entorno',
      'Comprensión multimodal de código, texto y metadatos',
      'Capacidad de formular hipótesis y diagnósticos de fallos',
      'Generación de explicaciones claras y concisas al usuario',
    ],
    status: 'future',
    icon: BrainCircuit,
  },
  {
    phase: 'Etapa 05',
    code: 'OS_TOOLING',
    title: 'Herramientas del Sistema Operativo',
    subtitle: 'Conectividad con utilidades nativas',
    description:
      'Capacidades de integración directa con administradores de paquetes, terminales, sistemas de archivos, procesos en segundo plano y configuraciones del hardware.',
    keyFeatures: [
      'Puentes de comandos terminal con validación previa',
      'Gestión de procesos, memoria RAM y consumo energético',
      'Inspección de sistemas de archivos y organización estructurada',
      'Compatibilidad con múltiples entornos y distribuciones',
    ],
    status: 'future',
    icon: Terminal,
  },
  {
    phase: 'Etapa 06',
    code: 'AUTOMATION_NET',
    title: 'Automatización y Acceso a Internet',
    subtitle: 'Extensión de capacidades hacia la red',
    description:
      'Habilitación de rutinas automatizadas coordinadas y acceso controlado a Internet para consultas en tiempo real, sincronización de fuentes técnicas y APIs externas.',
    keyFeatures: [
      'Ejecución supervisada de pipelines y scripts complejos',
      'Navegación y recopilación de documentación actualizada',
      'Disparadores automatizados condicionales (Triggers)',
      'Aislamiento de solicitudes web con cifrado de extremo a extremo',
    ],
    status: 'future',
    icon: Network,
  },
  {
    phase: 'Etapa 07',
    code: 'ADVANCED_SYMBIOSIS',
    title: 'Interacción Avanzada y Maduración',
    subtitle: 'La simbiosis completa usuario-sistema',
    description:
      'Culminación de la visión: un sistema informático verdaderamente inteligente, que comprende proactivamente las intenciones del usuario y ofrece una asistencia fluida e intuitiva.',
    keyFeatures: [
      'Interacción multimodal de respuesta inmediata',
      'Anticipación fluida de flujos de trabajo sin interrupciones',
      'Autodiagnóstico preventivo de fallos del sistema',
      'Evolución perpetua adaptada al crecimiento del usuario',
    ],
    status: 'future',
    icon: Zap,
  },
];

export const EvolutionSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const activeData = STAGES[selectedStage];

  return (
    <section id="evolucion" className="relative py-20 md:py-28 border-t border-blue-950/60 scroll-mt-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-sky-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono-tech text-sky-400 mb-3 uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5 text-sky-400" />
            <span>Hoja de Ruta del Proyecto</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            ¿Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">evolucionará</span>?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            COUTEX será desarrollado <strong>por etapas progresivas y rigurosamente validadas</strong>. Primero se construirá su núcleo fundamental y posteriormente se incorporarán memoria, aprendizaje, inteligencia artificial, herramientas, automatización e interacción avanzada.
          </p>
        </div>

        {/* Interactive Roadmap Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stage Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between px-2 pb-2 text-xs font-mono-tech text-sky-400">
              <span>ETAPAS DE DESARROLLO</span>
              <span>SELECCIONA UNA FASE</span>
            </div>

            {STAGES.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              const IconComp = stage.icon;

              return (
                <button
                  key={stage.code}
                  type="button"
                  id={`stage-button-${idx}`}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#07194a] to-[#040e2b] border-sky-400/80 shadow-[0_0_25px_rgba(56,189,248,0.25)]'
                      : 'bg-[#03081a]/80 border-blue-950 hover:border-blue-800/60 hover:bg-[#040d28]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                          : 'bg-blue-950/40 border-blue-900/50 text-slate-400 group-hover:text-sky-400'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono-tech tracking-wider text-sky-400 font-semibold">
                          {stage.phase}
                        </span>
                        {stage.status === 'active' && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono-tech bg-sky-400/20 text-sky-300 border border-sky-400/40">
                            EN CONSTRUCCIÓN
                          </span>
                        )}
                        {stage.status === 'next' && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono-tech bg-blue-900/30 text-blue-300 border border-blue-700/40">
                            SIGUIENTE
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-chakra font-bold truncate transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Details Showcase */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#041136] via-[#020b22] to-[#010614] border-2 border-blue-600/40 relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.25)]">
              
              {/* Corner decor */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-3 right-3 text-[11px] font-mono-tech text-sky-400/60">
                MODULE: {activeData.code}
              </div>

              {/* Phase Header */}
              <div className="flex items-center gap-2 text-xs font-mono-tech text-sky-400 mb-2">
                <span>{activeData.phase}</span>
                <span>•</span>
                <span className="text-slate-400">{activeData.subtitle}</span>
              </div>

              <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mb-4">
                {activeData.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-6">
                {activeData.description}
              </p>

              {/* Key Features List */}
              <div className="mt-6 pt-6 border-t border-blue-900/60">
                <h4 className="text-xs font-mono-tech uppercase tracking-wider text-sky-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>Objetivos técnicos de esta etapa</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeData.keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 rounded-lg bg-[#020921]/90 border border-blue-900/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0 shadow-[0_0_6px_#38bdf8]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-4 border-t border-blue-900/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">ESTADO DEL MÓDULO:</span>
                  {activeData.status === 'active' ? (
                    <span className="text-sky-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      FASE PRIMARIA EN PROCESO
                    </span>
                  ) : activeData.status === 'next' ? (
                    <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      ESPECIFICACIÓN COMPLETADA
                    </span>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      PROGRAMADA POST-NÚCLEO
                    </span>
                  )}
                </div>

                <span className="text-sky-400/80">ETAPA {selectedStage + 1} DE {STAGES.length}</span>
              </div>

            </div>

            {/* Stage evolution sequence bar */}
            <div className="mt-4 p-4 rounded-xl bg-[#020719]/80 border border-blue-950 flex items-center justify-between text-xs font-mono-tech text-slate-400">
              <span className="text-sky-400 font-semibold">FLUJO DE PROGRESIÓN:</span>
              <span className="truncate">Núcleo ➔ Memoria ➔ Aprendizaje ➔ IA ➔ Herramientas ➔ Automatización ➔ Sinergia</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

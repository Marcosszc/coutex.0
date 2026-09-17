import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Database, 
  Boxes, 
  RefreshCw, 
  Cpu, 
  UserCog, 
  Sliders, 
  Check, 
  Sparkles 
} from 'lucide-react';

interface Principle {
  id: string;
  number: string;
  name: string;
  headline: string;
  description: string;
  systemImpact: string;
  icon: React.ElementType;
}

const PRINCIPLES: Principle[] = [
  {
    id: 'autorizacion',
    number: '01',
    name: 'Autorización del usuario',
    headline: 'Consentimiento explícito e irrevocable',
    description:
      'COUTEX no realiza ninguna modificación en el sistema, archivos o configuraciones sin la solicitud o autorización previa y consciente del usuario. El control permanece intacto en manos humanas.',
    systemImpact: 'Previene ejecuciones imprevistas o silenciosas en el sistema operativo.',
    icon: ShieldCheck,
  },
  {
    id: 'aprendizaje',
    number: '02',
    name: 'Aprendizaje progresivo',
    headline: 'Asimilación orgánica y paulatina',
    description:
      'El sistema no asume hábitos precipitadamente: observa patrones recurrentes a lo largo del tiempo, consolidando sugerencias más precisas y útiles a medida que se profundiza la interacción diaria.',
    systemImpact: 'Evoluciona con la rutina real del usuario sin sesgos estáticos.',
    icon: TrendingUp,
  },
  {
    id: 'memoria',
    number: '03',
    name: 'Memoria personalizada',
    headline: 'Retención adaptada al contexto propio',
    description:
      'Almacena preferencias particulares, esquemas de proyectos, terminología preferida y estilos de resolución de problemas, manteniendo cada dato estrictamente protegido dentro del ámbito personal.',
    systemImpact: 'Evita tener que reconfigurar o explicar las mismas instrucciones repetidas veces.',
    icon: Database,
  },
  {
    id: 'modularidad',
    number: '04',
    name: 'Modularidad',
    headline: 'Componentes independientes y desacoplados',
    description:
      'Cada capacidad de COUTEX funciona como un módulo autónomo. Esto garantiza que nuevas herramientas puedan incorporarse, aislarse o actualizarse sin alterar la estabilidad del núcleo central.',
    systemImpact: 'Asegura estabilidad del sistema y tolerancia a fallos por diseño.',
    icon: Boxes,
  },
  {
    id: 'evolucion',
    number: '05',
    name: 'Evolución constante',
    headline: 'Crecimiento adaptativo continuo',
    description:
      'Diseñado para expandirse a la par de las nuevas tecnologías: nuevos modelos de lenguaje, nuevas utilidades de terminal, estándares web y capacidades de automatización son asimilables progresivamente.',
    systemImpact: 'Impide la obsolescencia frente a cambios tecnológicos y de software.',
    icon: RefreshCw,
  },
  {
    id: 'integracion',
    number: '06',
    name: 'Integración con el sistema',
    headline: 'Coordinación nativa con la computadora',
    description:
      'En lugar de operar como una pestaña externa aislada, COUTEX está concebido para dialogar a bajo y alto nivel con el entorno informático, reconociendo el estado del hardware, archivos y procesos.',
    systemImpact: 'Convierte a la máquina en un entorno activo coordinado inteligentemente.',
    icon: Cpu,
  },
  {
    id: 'adaptacion',
    number: '07',
    name: 'Adaptación al usuario',
    headline: 'El sistema se amolda a la persona',
    description:
      'El usuario no debe cambiar su forma de pensar ni su flujo natural de trabajo para usar COUTEX; es la capa inteligente la que se flexibiliza para respaldar sus hábitos particulares y ritmo de producción.',
    systemImpact: 'Elimina la curva de aprendizaje forzada típica del software rígido.',
    icon: UserCog,
  },
];

export const PrinciplesSection: React.FC = () => {
  const [activePrincipleId, setActivePrincipleId] = useState<string>('autorizacion');

  return (
    <section id="principios" className="relative py-20 md:py-28 border-t border-blue-950/60 scroll-mt-16">
      
      {/* Subtle blue light in background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono-tech text-sky-400 mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Fundamentos e Ideario Técnico</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Principios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">COUTEX</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Siete pilares inquebrantables definen la ética, la arquitectura y el comportamiento de COUTEX frente al usuario y al sistema operativo.
          </p>
        </div>

        {/* Principles Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((principle) => {
            const IconComponent = principle.icon;
            const isFeatured = principle.id === 'autorizacion';
            const isActive = activePrincipleId === principle.id;

            return (
              <div
                key={principle.id}
                id={`principle-card-${principle.id}`}
                onClick={() => setActivePrincipleId(principle.id)}
                className={`p-6 sm:p-7 rounded-xl transition-all duration-300 relative flex flex-col justify-between cursor-pointer group ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#051642] via-[#030d29] to-[#010614] border-2 border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.25)]'
                    : isActive
                    ? 'bg-[#040f2e] border-sky-400/80 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                    : 'bg-[#03091c]/85 border border-blue-950/90 hover:border-blue-700/60 hover:bg-[#040e28]'
                }`}
              >
                {/* Tech header of card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-orbitron font-bold text-xs tracking-wider text-sky-400/80">
                      PRINCIPIO {principle.number}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all ${
                        isFeatured || isActive
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                          : 'bg-blue-950/50 border-blue-900/60 text-sky-400 group-hover:border-sky-400/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-chakra font-bold text-xl text-white group-hover:text-sky-300 transition-colors mb-1">
                    {principle.name}
                  </h3>

                  <p className="text-xs font-mono-tech text-sky-400/90 mb-3">
                    {principle.headline}
                  </p>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Card footer / Impact */}
                <div className="mt-6 pt-4 border-t border-blue-900/40">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-sky-400 font-bold shrink-0">Impacto:</span>
                    <span>{principle.systemImpact}</span>
                  </div>
                </div>

                {/* Laser Corner for First/Key Principle */}
                {isFeatured && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono-tech bg-sky-400/20 border border-sky-400/60 text-sky-300 uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>Principio Cardinal</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Guiding Quote Box */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-[#040e2b]/80 to-blue-950/40 border border-blue-800/50 text-center">
          <p className="text-sm sm:text-base font-sans text-slate-200 italic max-w-3xl mx-auto">
            &ldquo;La verdadera autonomía no consiste en actuar sin permiso, sino en poseer la capacidad inteligente de comprender, analizar y servir fielmente a la voluntad del usuario.&rdquo;
          </p>
          <span className="inline-block mt-3 text-xs font-mono-tech text-sky-400 uppercase tracking-wider">
            — Filosofía de Diseño COUTEX
          </span>
        </div>

      </div>
    </section>
  );
};

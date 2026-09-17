import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Network, Sparkles, Terminal } from 'lucide-react';

interface CoreNode {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  angle: number; // in degrees
  distance: number; // in px
}

const NODES: CoreNode[] = [
  {
    id: 'auth',
    name: 'Autorización y Control',
    description: 'Filtro absoluto de seguridad: toda acción sobre el sistema requiere confirmación.',
    icon: ShieldCheck,
    angle: 270, // Top
    distance: 145,
  },
  {
    id: 'core',
    name: 'Núcleo Autónomo',
    description: 'Motor inteligente central de procesamiento contextual y análisis dinámico.',
    icon: Cpu,
    angle: 330,
    distance: 145,
  },
  {
    id: 'memory',
    name: 'Memoria Adaptativa',
    description: 'Retención estructurada de flujos de trabajo, hábitos y preferencias del usuario.',
    icon: Database,
    angle: 30,
    distance: 145,
  },
  {
    id: 'learning',
    name: 'Aprendizaje Continuo',
    description: 'Asimilación gradual del comportamiento para optimizar la asistencia sin fricción.',
    icon: Sparkles,
    angle: 90,
    distance: 145,
  },
  {
    id: 'os',
    name: 'Integración de Sistema',
    description: 'Interacción profunda y coordinada con las herramientas y servicios del sistema.',
    icon: Terminal,
    angle: 150,
    distance: 145,
  },
  {
    id: 'network',
    name: 'Acceso y Automatización',
    description: 'Capacidad asistida de conexión de red y ejecución de tareas bajo supervisión.',
    icon: Network,
    angle: 210,
    distance: 145,
  },
];

export const CoutexCoreVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<CoreNode | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      {/* Outer Glow Halo */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-radial from-blue-500/20 via-sky-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Interactive Core System Display */}
      <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center">
        
        {/* Outermost Telemetry Ring */}
        <div className="absolute inset-0 rounded-full border border-blue-900/40 animate-rotate-slow pointer-events-none">
          {/* Ticks on perimeter */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={deg}
              className="absolute w-2 h-0.5 bg-blue-500/50"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translate(158px, -50%)`,
                transformOrigin: '0 0',
              }}
            />
          ))}
        </div>

        {/* Second Ring: Segmented Tech Borders */}
        <div className="absolute inset-6 rounded-full border border-dashed border-sky-600/30 animate-rotate-reverse pointer-events-none" />

        {/* Third Ring: Clean Blue Laser Ring */}
        <div className="absolute inset-12 rounded-full border border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.2)] pointer-events-none" />

        {/* Fourth Ring: Fast subtle telemetry */}
        <div className="absolute inset-20 rounded-full border border-t-sky-400/80 border-r-transparent border-b-blue-600/40 border-l-transparent animate-spin [animation-duration:14s] pointer-events-none" />

        {/* Center Quantum/Intelligence Core */}
        <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-950 via-[#030d29] to-[#01040d] border-2 border-sky-400/70 shadow-[0_0_40px_rgba(56,189,248,0.5)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer transition-all duration-500 hover:border-sky-300 hover:shadow-[0_0_60px_rgba(56,189,248,0.8)]">
          {/* Inner pulsating node */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.9)] animate-pulse-slow">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="font-orbitron text-[11px] sm:text-xs font-bold tracking-widest text-sky-200 mt-1.5">
            COUTEX
          </span>
          <span className="text-[9px] font-mono-tech tracking-wider text-sky-400/80 uppercase">
            LAYER 0.1
          </span>
        </div>

        {/* Orbital Peripheral Nodes */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          // Responsive distance adjustment
          const isSelected = activeNode?.id === node.id;
          
          return (
            <div
              key={node.id}
              className="absolute group z-20"
              style={{
                top: `calc(50% + ${Math.sin(rad) * 140}px)`,
                left: `calc(50% + ${Math.cos(rad) * 140}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
            >
              {/* Connector line to center */}
              <div
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                  width: '140px',
                  height: '1px',
                  background: isSelected
                    ? 'linear-gradient(90deg, rgba(56,189,248,0.8), rgba(37,99,235,0.3))'
                    : 'linear-gradient(90deg, rgba(56,189,248,0.25), transparent)',
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${node.angle + 180}deg)`,
                }}
              />

              {/* Node Orb */}
              <button
                type="button"
                id={`core-node-${node.id}`}
                aria-label={node.name}
                className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  isSelected
                    ? 'bg-blue-600 border-sky-300 text-white shadow-[0_0_25px_rgba(56,189,248,0.9)] scale-110'
                    : 'bg-[#030919] border-blue-500/40 text-sky-400 hover:border-sky-400 hover:text-sky-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                }`}
              >
                <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sr-only">{node.name}</span>
                
                {/* Ping pulse on hover */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full border border-sky-400/60 animate-ping pointer-events-none" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Node Details Box */}
      <div className="mt-6 w-full max-w-md min-h-[72px] px-4 py-3 rounded-lg bg-[#040b1e]/90 border border-blue-900/60 backdrop-blur-md text-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {activeNode ? (
          <div className="animate-in fade-in duration-200">
            <div className="flex items-center justify-center gap-2 text-sky-300 font-chakra font-semibold text-sm tracking-wide">
              <activeNode.icon className="w-4 h-4 text-sky-400" />
              <span>{activeNode.name}</span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
              {activeNode.description}
            </p>
          </div>
        ) : (
          <div className="text-xs text-sky-400/70 font-mono-tech flex items-center justify-center h-full gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Pasa el cursor sobre los nodos orbitales para inspeccionar la arquitectura</span>
          </div>
        )}
      </div>

      {/* Safety Badge under visual */}
      <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-[11px] font-mono-tech text-sky-300/80">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
        <span>SISTEMA REGULADO POR PERMISO EXPLÍCITO</span>
      </div>
    </div>
  );
};

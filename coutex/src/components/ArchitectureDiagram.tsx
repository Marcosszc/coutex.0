import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  HardDrive, 
  User, 
  Cpu, 
  ArrowRight, 
  Database, 
  Globe, 
  Lock,
  Layers
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      id: 0,
      name: 'Nivel Humano',
      badge: 'USUARIO SOBERANO',
      icon: User,
      title: 'Decisión, Autorización y Propósito',
      desc: 'El usuario interactúa en lenguaje natural o mediante sus tareas ordinarias. Mantiene el mando absoluto y la facultad exclusiva de autorizar cualquier modificación en su entorno.',
      color: 'border-sky-400 text-sky-300',
    },
    {
      id: 1,
      name: 'Cortafuegos de Control',
      badge: 'FILTRO DE PERMISOS',
      icon: ShieldCheck,
      title: 'Barrera Inviolable de Seguridad',
      desc: 'Cada sugerencia o intención de cambio generada por la IA debe pasar por este filtro. Si no cuenta con confirmación explícita del usuario, la acción es abortada inmediatamente.',
      color: 'border-blue-500 text-blue-400',
    },
    {
      id: 2,
      name: 'Capa Inteligente COUTEX',
      badge: 'NÚCLEO ADAPTATIVO',
      icon: Cpu,
      title: 'Motor Autónomo, Memoria y Razonamiento',
      desc: 'Analiza el contexto de trabajo, almacena aprendizajes recurrentes en su memoria adaptativa y diseña planes de asistencia técnica optimizados para la computadora.',
      color: 'border-sky-300 text-sky-200',
    },
    {
      id: 3,
      name: 'Entorno de la Computadora',
      badge: 'SISTEMA OPERATIVO',
      icon: Terminal,
      title: 'Hardware, Archivos, Procesos y Conectividad',
      desc: 'El entorno de la máquina que ejecuta las aplicaciones, gestiona los archivos locales, almacena los datos y se comunica con la red.',
      color: 'border-blue-700 text-slate-300',
    },
  ];

  return (
    <div className="my-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#030b24] via-[#020718] to-[#01040f] border border-blue-900/60 relative overflow-hidden shadow-[0_0_35px_rgba(37,99,235,0.15)]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-blue-900/40">
        <div>
          <span className="text-[11px] font-mono-tech uppercase tracking-wider text-sky-400 block mb-1">
            ESQUEMA TÉCNICO INTERACTIVO
          </span>
          <h3 className="font-chakra font-bold text-xl sm:text-2xl text-white">
            Arquitectura de Flujo Seguro de COUTEX
          </h3>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded bg-blue-950/70 border border-blue-800 text-xs font-mono-tech text-sky-300">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>4 CAPAS DE INTEGRACIÓN</span>
        </div>
      </div>

      {/* Layer Step Visual */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {layers.map((layer, index) => {
          const IconC = layer.icon;
          const isCurrent = activeLayer === index;

          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(index)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                isCurrent
                  ? 'bg-gradient-to-b from-[#061845] to-[#030d29] border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                  : 'bg-[#020717]/80 border-blue-950 hover:border-blue-800 hover:bg-[#030a21]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono-tech text-sky-400">
                    CAPA 0{index + 1}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      isCurrent
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                        : 'bg-blue-950/50 border-blue-900 text-slate-400 group-hover:text-sky-400'
                    }`}
                  >
                    <IconC className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[10px] font-mono-tech tracking-wider uppercase text-slate-400 block mb-1">
                  {layer.badge}
                </span>
                <h4 className="font-chakra font-bold text-sm sm:text-base text-white">
                  {layer.name}
                </h4>
              </div>

              <div className="mt-4 pt-2 border-t border-blue-900/30 flex items-center justify-between text-[11px] font-mono-tech text-sky-400">
                <span>{isCurrent ? 'EXPLORANDO' : 'DETALLES'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Layer Box */}
      <div className="mt-6 p-6 rounded-xl bg-[#02081c]/90 border border-blue-800/40 relative">
        <div className="flex items-center gap-2.5 text-sky-400 font-chakra font-semibold text-sm mb-2">
          {React.createElement(layers[activeLayer].icon, { className: 'w-5 h-5 text-sky-400' })}
          <span>{layers[activeLayer].title}</span>
        </div>
        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          {layers[activeLayer].desc}
        </p>
      </div>

    </div>
  );
};

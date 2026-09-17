import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '¿Qué es?', href: '#que-es' },
    { name: 'Objetivo', href: '#objetivo' },
    { name: 'Evolución', href: '#evolucion' },
    { name: 'Principios', href: '#principios' },
  ];

  return (
    <header
      id="coutex-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020612]/90 backdrop-blur-md border-b border-blue-900/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
        >
          <div className="relative w-9 h-9 rounded-lg bg-[#05112e] border border-sky-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:border-sky-300 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.7)] transition-all">
            <Cpu className="w-5 h-5 text-sky-400 group-hover:rotate-45 transition-transform duration-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-xl tracking-wider text-white group-hover:text-sky-300 transition-colors">
                COUTEX
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono-tech tracking-wider bg-blue-950/80 border border-blue-800/60 text-sky-300">
                PROYECTO OFICIAL
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech tracking-wider text-slate-400">
              <span>IA PARA SISTEMAS AUTÓNOMA</span>
              <span className="text-blue-600">•</span>
              <span className="text-sky-400/90">&copy; Marcos.szc</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-chakra font-medium tracking-wide text-slate-300 hover:text-sky-300 transition-colors rounded-md hover:bg-blue-950/40 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
        </nav>

        {/* Right CTA / Status Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#030d24] border border-blue-900/60 text-xs font-mono-tech text-sky-400/90">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Fase de Arquitectura</span>
          </div>

          <button
            onClick={onExploreClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600/90 hover:bg-blue-500 text-white font-chakra text-xs font-semibold tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <span>Ver Proyecto</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 rounded-lg bg-[#040e28] border border-blue-900/60 text-sky-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020614]/98 border-b border-blue-900/60 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-chakra text-slate-200 hover:text-sky-300 hover:bg-blue-950/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-blue-900/40 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono-tech text-sky-400/90">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Proyecto en fase de arquitectura</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

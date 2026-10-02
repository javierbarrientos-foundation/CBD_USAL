import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';

interface HeaderProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ecosistema', href: '#ecosistema' },
    { label: 'Áreas', href: '#areas' },
    { label: 'Dirección', href: '#direccion' },
    { label: 'Docencia', href: '#docencia' },
    { label: 'Indicadores', href: '#indicadores' },
    { label: 'Documentos', href: '#documentos' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs'
            : 'bg-white/95 backdrop-blur-md border-b border-[var(--border-subtle)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* BLOQUE SUPERIOR: Dos columnas de logos con espacio propio e independiente */}
          <div className="py-2.5 sm:py-3 border-b border-[var(--border-subtle)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              
              {/* Columna 1 (Izquierda): Universidad de Salamanca & Facultad de Medicina */}
              <a
                href={DEPARTMENT_INFO.facultadMedicinaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-[#d22020] rounded-lg shrink-0"
                aria-label="Facultad de Medicina - Universidad de Salamanca"
              >
                <img
                  src="/images/usal-logo.png"
                  alt="Universidad de Salamanca"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-103 shrink-0"
                  width="48"
                  height="48"
                />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[#d22020] transition-colors leading-tight font-serif-heading">
                    Universidad de Salamanca
                  </span>
                  <span className="text-xs sm:text-sm text-[#385e9d] font-semibold leading-tight flex items-center gap-1.5 mt-0.5 font-mono">
                    <span>Facultad de Medicina</span>
                    <span className="text-[#4d4d4d]/40">·</span>
                    <span className="text-[#4d4d4d]">Campus Unamuno</span>
                  </span>
                </div>
              </a>

              {/* Columna 2 (Derecha): Departamento de Ciencias Biomédicas y del Diagnóstico */}
              <a
                href="#"
                className="flex items-center md:justify-end gap-3.5 group focus-visible:outline-2 focus-visible:outline-[#d22020] rounded-lg shrink-0"
                aria-label="Departamento de Ciencias Biomédicas y del Diagnóstico"
              >
                <div className="flex flex-col md:text-right order-2 md:order-1">
                  <span className="text-sm sm:text-base font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[#d22020] transition-colors leading-tight font-serif-heading">
                    Dpto. Ciencias Biomédicas y del Diagnóstico
                  </span>
                  <span className="text-xs sm:text-sm text-[#d22020] font-bold leading-tight font-mono mt-0.5">
                    Docencia, Investigación & Diagnóstico Clínico
                  </span>
                </div>
                <img
                  src="/images/cbd-logo.png"
                  alt="CBD USAL"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-103 shrink-0 order-1 md:order-2"
                  width="44"
                  height="44"
                />
              </a>

            </div>
          </div>

          {/* BLOQUE INFERIOR: El menú de navegación con su propia altura y espaciado */}
          <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-12">
            
            {/* Navegación principal */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-[#4d4d4d]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-[#d22020] font-bold'
                        : 'hover:text-[#d22020]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d22020] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Título en móviles */}
            <div className="lg:hidden text-xs font-mono font-bold text-[#d22020] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d22020]" />
              <span>Menú Departamental</span>
            </div>

            {/* Acciones: Buscador instantáneo + Bolsa PDI (Sin botón de modo ni ZIP) */}
            <div className="flex items-center gap-3">
              {/* Botón Buscador */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-[#4d4d4d] bg-[var(--science-surface-soft)] hover:bg-[var(--usal-red-light)] hover:text-[#d22020] rounded-xl transition-all border border-[var(--border-subtle)] focus-visible:outline-2 focus-visible:outline-[#d22020]"
                aria-label="Buscar en el departamento (Cmd+K)"
              >
                <Search className="w-4 h-4 text-[#4d4d4d]" />
                <span className="hidden sm:inline">Buscar</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-mono bg-white text-[#4d4d4d] rounded border border-[var(--border-subtle)] font-bold">
                  ⌘K
                </kbd>
              </button>

              {/* Botón Bolsa PDI */}
              <a
                href={DEPARTMENT_INFO.jobBoardUsalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] active:bg-[#961212] rounded-xl transition-colors whitespace-nowrap shadow-xs focus-visible:outline-2 focus-visible:outline-[#d22020]"
              >
                <span>Bolsa PDI</span>
                <ArrowUpRight className="w-4 h-4 text-red-100" />
              </a>

              {/* Gatillo del Menú Móvil */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#4d4d4d] hover:text-[#d22020] rounded-lg focus-visible:outline-2 focus-visible:outline-[#d22020]"
                aria-expanded={mobileMenuOpen}
                aria-label="Alternar menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d22020]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Cajón de Navegación Móvil */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-stone-950/60 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-24 left-0 right-0 bg-white border-b border-[var(--border-subtle)] shadow-2xl p-6 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-base font-semibold text-[var(--text-primary)] hover:text-[#d22020] border-b border-[var(--border-subtle)] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {activeSection === link.href.substring(1) && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d22020]" />
                  )}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={DEPARTMENT_INFO.jobBoardUsalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] rounded-xl transition-colors shadow-xs"
                >
                  <span>Bolsa de Empleo PDI USAL</span>
                  <ArrowUpRight className="w-4 h-4 text-red-200" />
                </a>
                <a
                  href={DEPARTMENT_INFO.facultadMedicinaUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#385e9d] bg-[var(--usal-blue-light)] border border-[#385e9d]/25 rounded-xl transition-colors"
                >
                  <span>Facultad de Medicina</span>
                  <ArrowUpRight className="w-4 h-4 text-[#385e9d]" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

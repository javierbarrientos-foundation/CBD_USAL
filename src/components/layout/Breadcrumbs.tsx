import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Home, Building2, ChevronDown, Layers, Users, Award, GraduationCap, FileText, Newspaper, Image as ImageIcon, Mail, Activity, History } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';

interface BreadcrumbsProps {
  activeSection: string;
}

interface SectionMeta {
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}

const SECTION_ITEMS: Record<string, SectionMeta> = {
  inicio: {
    label: 'Inicio Departamental',
    shortLabel: 'Inicio',
    icon: <Home className="w-3.5 h-3.5 text-[#d22020]" />
  },
  ecosistema: {
    label: 'Ecosistema Científico',
    shortLabel: 'Ecosistema',
    icon: <Activity className="w-3.5 h-3.5 text-[#d22020]" />
  },
  departamento: {
    label: 'Presentación y Sede',
    shortLabel: 'Presentación',
    icon: <Building2 className="w-3.5 h-3.5 text-[#d22020]" />
  },
  areas: {
    label: 'Áreas de Conocimiento (7)',
    shortLabel: 'Áreas',
    icon: <Layers className="w-3.5 h-3.5 text-[#d22020]" />
  },
  direccion: {
    label: 'Equipo de Dirección',
    shortLabel: 'Dirección',
    icon: <Award className="w-3.5 h-3.5 text-[#d22020]" />
  },
  comisiones: {
    label: 'Comisiones Departamentales',
    shortLabel: 'Comisiones',
    icon: <Users className="w-3.5 h-3.5 text-[#d22020]" />
  },
  docencia: {
    label: 'Docencia de Grado y Posgrado',
    shortLabel: 'Docencia',
    icon: <GraduationCap className="w-3.5 h-3.5 text-[#d22020]" />
  },
  documentos: {
    label: 'Documentos Oficiales y Bolsas PDI',
    shortLabel: 'Documentos',
    icon: <FileText className="w-3.5 h-3.5 text-[#d22020]" />
  },
  trayectoria: {
    label: 'Trayectoria Histórica USAL',
    shortLabel: 'Trayectoria',
    icon: <History className="w-3.5 h-3.5 text-[#d22020]" />
  },
  actualidad: {
    label: 'Actualidad y Eventos',
    shortLabel: 'Actualidad',
    icon: <Newspaper className="w-3.5 h-3.5 text-[#d22020]" />
  },
  galeria: {
    label: 'Galería e Instalaciones',
    shortLabel: 'Galería',
    icon: <ImageIcon className="w-3.5 h-3.5 text-[#d22020]" />
  },
  contacto: {
    label: 'Contacto y Sede Central',
    shortLabel: 'Contacto',
    icon: <Mail className="w-3.5 h-3.5 text-[#d22020]" />
  }
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeSection }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSection = SECTION_ITEMS[activeSection] || SECTION_ITEMS.inicio;
  const isHome = activeSection === 'inicio' || !activeSection;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollTo = (id: string) => {
    setDropdownOpen(false);
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Ruta de navegación jerárquica"
      className="relative z-30 bg-white border-b border-[var(--border-subtle)] text-sm shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3">
          
          {/* Breadcrumb Path List */}
          <ol className="flex items-center flex-wrap gap-2 list-none m-0 p-0 text-[#4d4d4d] dark:text-stone-300 min-w-0">
            
            {/* Level 1: Universidad de Salamanca in #d22020 dot */}
            <li className="flex items-center gap-1.5 shrink-0">
              <a
                href={DEPARTMENT_INFO.usalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020] hover:bg-[var(--usal-red-light)] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#d22020]"
                title="Universidad de Salamanca (Fundada en 1218)"
              >
                <span className="w-2 h-2 rounded-full bg-[#d22020]" />
                <span className="hidden sm:inline">Universidad de Salamanca</span>
                <span className="sm:hidden font-bold">USAL</span>
              </a>
              <ChevronRight className="w-4 h-4 text-[#4d4d4d]/40 shrink-0" aria-hidden="true" />
            </li>

            {/* Level 2: Facultad de Medicina in #385e9d */}
            <li className="flex items-center gap-1.5 shrink-0">
              <a
                href={DEPARTMENT_INFO.facultadMedicinaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[#385e9d] hover:bg-[var(--usal-blue-light)] font-semibold transition-colors border border-[#385e9d]/25 focus-visible:outline-2 focus-visible:outline-[#385e9d]"
                title="Facultad de Medicina - Universidad de Salamanca"
              >
                <Building2 className="w-4 h-4 hidden sm:inline" />
                <span>Facultad de Medicina</span>
              </a>
              <ChevronRight className="w-4 h-4 text-[#4d4d4d]/40 shrink-0" aria-hidden="true" />
            </li>

            {/* Level 3: Departamento de Ciencias Biomédicas y del Diagnóstico */}
            <li className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => handleScrollTo('inicio')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-left transition-colors focus-visible:outline-2 focus-visible:outline-[#d22020] ${
                  isHome
                    ? 'bg-[var(--usal-red-light)] text-[#d22020] font-bold border border-[#d22020]/25'
                    : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020] hover:bg-[var(--usal-red-light)] font-semibold'
                }`}
                aria-current={isHome ? 'page' : undefined}
                title="Ir al inicio del departamento"
              >
                <span className="hidden md:inline font-bold">Dpto. Ciencias Biomédicas y del Diagnóstico</span>
                <span className="md:hidden font-bold">Dpto. CBD</span>
              </button>
            </li>

            {/* Level 4: Active Section with Quick Selector in #d22020 */}
            {!isHome && (
              <li className="flex items-center gap-1.5 min-w-0">
                <ChevronRight className="w-3.5 h-3.5 text-[#4d4d4d]/40 shrink-0" aria-hidden="true" />
                
                <div className="relative inline-block" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#d22020] text-white font-semibold text-xs shadow-2xs hover:bg-[#b31616] transition-all focus-visible:outline-2 focus-visible:outline-[#d22020]"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    title="Cambiar de sección"
                  >
                    <span className="truncate max-w-[140px] sm:max-w-xs md:max-w-sm">
                      {currentSection.label}
                    </span>
                    <ChevronDown className="w-3 h-3 opacity-80 shrink-0" />
                  </button>

                  {/* Jump Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-1.5 w-64 sm:w-72 bg-[var(--science-surface)] rounded-xl shadow-xl border border-[var(--border-subtle)] py-2 z-50 animate-in fade-in slide-in-from-top-1">
                      <div className="px-3 py-1.5 border-b border-[var(--border-subtle)] text-[10px] uppercase tracking-wider font-bold text-[#d22020] font-mono">
                        Navegación Departamental USAL
                      </div>
                      <div className="max-h-72 overflow-y-auto py-1">
                        {Object.entries(SECTION_ITEMS).map(([secId, meta]) => {
                          const isCurrent = secId === activeSection;
                          return (
                            <button
                              key={secId}
                              type="button"
                              onClick={() => handleScrollTo(secId)}
                              className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                                isCurrent
                                  ? 'bg-[var(--usal-red-light)] text-[#d22020] font-bold border-l-3 border-[#d22020]'
                                  : 'text-[#4d4d4d] dark:text-stone-300 hover:bg-[var(--science-surface-soft)] hover:text-[#d22020]'
                              }`}
                            >
                              <span className="shrink-0">{meta.icon}</span>
                              <span className="truncate">{meta.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            )}

          </ol>

          {/* Institutional Badge */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#4d4d4d] dark:text-stone-400">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d22020]" />
            <span className="text-[#d22020] font-semibold">CBD USAL</span>
            <span className="opacity-40">|</span>
            <span className="text-[#385e9d] font-semibold">Medicina</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

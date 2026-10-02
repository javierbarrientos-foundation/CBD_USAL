import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, CheckCircle2, Microscope, Activity, Users, GraduationCap, Mail } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';
import { ScientificBackground } from '../visuals/ScientificBackground';
import { MolecularPattern } from '../visuals/MolecularPattern';

export const Hero: React.FC = () => {
  const quickNav = [
    { label: 'Ecosistema', href: '#ecosistema', icon: Activity },
    { label: 'Áreas Científicas', href: '#areas', icon: Microscope },
    { label: 'Dirección', href: '#direccion', icon: Users },
    { label: 'Docencia', href: '#docencia', icon: GraduationCap },
    { label: 'Documentos PDI', href: '#documentos', icon: FileText },
    { label: 'Contacto', href: '#contacto', icon: Mail }
  ];

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-[var(--border-subtle)] bg-science-grid">
      
      {/* CAPA 1: Fondo profundo con acentos sutiles Rojo #d22020 y Azul #385e9d */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--science-bg)] via-[var(--science-surface)] to-[var(--science-bg)] opacity-95 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d22020]/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-[#385e9d]/8 rounded-full blur-3xl pointer-events-none" />

      {/* CAPA 2: Textura científica animada con nodos rojos y azules USAL */}
      <ScientificBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Headline + Scientific Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Contenido Editorial & Manifiesto Científico */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--text-primary)] font-bold tracking-tight leading-[1.14] mb-6">
              Departamento de Ciencias Biomédicas y del Diagnóstico
            </h1>

            {/* Concepto Creativo Principal */}
            <div className="p-4 mb-6 rounded-xl bg-[var(--usal-red-light)] border border-[#d22020]/20 max-w-xl shadow-2xs">
              <span className="text-xs font-mono font-bold text-[#d22020] uppercase tracking-wider block mb-1">
                Principio rector
              </span>
              <p className="text-base sm:text-lg font-serif italic text-[#4d4d4d] dark:text-stone-200 leading-snug">
                “La ciencia que conecta conocimiento, diagnóstico y salud.”
              </p>
            </div>

            <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Eje académico e investigador de la Facultad de Medicina en la Universidad de Salamanca. Articulamos el rigor de la microbiología molecular, la epidemiología, la medicina legal y las ciencias radiológicas con la formación clínica de vanguardia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#ecosistema"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#d22020] hover:bg-[#b31616] active:bg-[#961212] rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#d22020] whitespace-nowrap"
              >
                <span>Explorar Ecosistema Científico</span>
                <ArrowDown className="w-5 h-5 text-red-200" />
              </a>

              <a
                href="#documentos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#385e9d] bg-[var(--science-surface)] hover:bg-[var(--usal-blue-light)] rounded-xl border border-[#385e9d]/40 transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-[#385e9d] whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-[#385e9d]" />
                <span>Bolsas PDI y Convocatorias</span>
              </a>
            </div>

            {/* Event Highlight Banner (Jornada de Medicina Nuclear) */}
            <div className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] border-l-4 border-l-[#d22020] shadow-xs max-w-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#d22020] mt-1.5 shrink-0 animate-pulse" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#d22020] font-bold block">
                      Evento Científico Destacado 2026
                    </span>
                    <h2 className="text-base font-bold text-[var(--text-primary)] leading-snug mt-0.5">
                      Jornada de Medicina Nuclear — Universidad de Salamanca
                    </h2>
                    <p className="text-sm text-[#4d4d4d] dark:text-stone-300 mt-1">
                      Diagnóstico por imagen avanzado, radiofármacos y aplicaciones clínicas.
                    </p>
                  </div>
                </div>
                <a
                  href="https://cbdusal.org/wp-content/uploads/2026/03/programa.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#d22020] hover:text-[#b31616] shrink-0 pt-1"
                >
                  <span>Programa PDF</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Fotografía de la Facultad */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-xl bg-stone-900 aspect-4/3 group">
                <img
                  src="/images/facultad-medicina-38.webp"
                  alt="Edificio de la Facultad de Medicina - Universidad de Salamanca"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                  width="1024"
                  height="768"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-mono font-bold text-stone-300 block uppercase tracking-wider">
                    Facultad de Medicina
                  </span>
                  <span className="text-base font-bold text-white block mt-0.5">
                    Campus Miguel de Unamuno · Salamanca
                  </span>
                </div>
              </div>

              {/* Offset Microscopy Floating Accent Window */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 w-48 rounded-xl overflow-hidden border-2 border-white dark:border-stone-800 shadow-xl bg-stone-900 aspect-square">
                <img
                  src="/images/microscopio.jpg"
                  alt="Microscopía y diagnóstico de precisión"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="300"
                  height="300"
                />
                <div className="absolute inset-0 bg-stone-950/25" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono leading-tight drop-shadow-md font-bold">
                  Microscopía & Diagnóstico
                </div>
              </div>

              {/* Verified Department Credentials Card */}
              <div className="hidden md:block absolute -top-5 -right-5 glass-panel p-4 rounded-xl border border-[#385e9d]/25 shadow-md max-w-60">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#385e9d] shrink-0" />
                  <span className="text-xs font-mono font-bold text-[#385e9d]">RUCT 5601568</span>
                </div>
                <p className="text-xs text-[#4d4d4d] dark:text-stone-300 leading-snug font-medium">
                  Doctorado Oficial en Biomedicina Clínica y Experimental
                </p>
              </div>

              {/* Floating Molecular Pattern decor */}
              <div className="hidden lg:block absolute -top-12 -left-12 pointer-events-none text-[#d22020]">
                <MolecularPattern variant="helix" />
              </div>

            </div>
          </div>

        </div>

        {/* Navegación Rápida Científica & Estadísticas */}
        <div className="mt-16 pt-10 border-t border-[var(--border-subtle)]">
          
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4d4d4d] dark:text-stone-400 font-bold">
              Acceso Rápido por Secciones
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {quickNav.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#4d4d4d] dark:text-stone-300 bg-[var(--science-surface)] hover:text-[#d22020] hover:bg-[var(--usal-red-light)] border border-[var(--border-subtle)] transition-colors shadow-2xs"
                  >
                    <Icon className="w-4 h-4 text-[#d22020]" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
            <div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#d22020] tabular-nums">
                7
              </div>
              <div className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                Áreas de Conocimiento
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 mt-1">
                Historia, Legal, Preventiva, Micro, Gine, Pediatría y Radiología
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#d22020] tabular-nums">
                8
              </div>
              <div className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                Grados Sanitarios
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 mt-1">
                Medicina, Odontología, Fisio, TO, Criminología y más
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#d22020] tabular-nums">
                3+
              </div>
              <div className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                Posgrados & Másteres
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 mt-1">
                Enfermedades Tropicales, Metodología e Investigación
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#d22020] tabular-nums">
                1218
              </div>
              <div className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mt-1.5">
                Universidad de Salamanca
              </div>
              <div className="text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 mt-1">
                Más de 8 siglos de excelencia académica en España
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { DEPARTMENT_INFO, AREAS_OF_KNOWLEDGE } from '../../data/departmentData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14171d] text-stone-300 pt-16 pb-14 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800/80">
          
          {/* Col 1: Institutional Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src="/images/usal-logo.png"
                  alt="Universidad de Salamanca"
                  className="h-12 w-auto object-contain brightness-0 invert opacity-95"
                  width="48"
                  height="48"
                />
                <img
                  src="/images/cbd-logo.png"
                  alt="CBD USAL"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-80 hidden sm:block"
                  width="40"
                  height="40"
                />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#d22020] font-bold font-mono">
                    Universidad de Salamanca
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-stone-100">
                    Facultad de Medicina
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif text-white font-bold mb-3 leading-snug">
                Departamento de Ciencias Biomédicas y del Diagnóstico
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed max-w-sm mb-6 font-normal">
                Unidad académica e investigadora de referencia en ciencias biomédicas, medicina clínica, patología molecular, epidemiología y diagnóstico radiológico.
              </p>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-2.5 text-sm text-stone-300 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d22020] shrink-0 mt-0.5" />
                <span>Colegio Mayor de Oviedo, Calle Alfonso X el Sabio s/n, 37007 Salamanca</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d22020] shrink-0" />
                <span>+34 923 29 45 00 (Ext. 1817)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d22020] shrink-0" />
                <a href={`mailto:${DEPARTMENT_INFO.email}`} className="text-red-300 font-bold hover:underline">
                  {DEPARTMENT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Áreas de Conocimiento (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#d22020] font-bold mb-5 font-mono">
              Áreas de Conocimiento
            </h4>
            <ul className="space-y-3 text-sm">
              {AREAS_OF_KNOWLEDGE.map((area) => (
                <li key={area.id}>
                  <a
                    href={area.scientificUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-stone-300 hover:text-white inline-flex items-center gap-1.5 group transition-colors"
                  >
                    <span>{area.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d22020] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Docencia y Programas (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-[#385e9d] font-bold mb-5 font-mono">
              Docencia
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <a href="#docencia" className="hover:text-white transition-colors">
                  Grados Sanitarios (8)
                </a>
              </li>
              <li>
                <a href="#docencia" className="hover:text-white transition-colors">
                  Másteres Universitarios
                </a>
              </li>
              <li>
                <a href="#docencia" className="hover:text-white transition-colors">
                  Doctorado en Biomedicina
                </a>
              </li>
              <li>
                <a href="#docencia" className="hover:text-white transition-colors">
                  Títulos Propios & Posgrado
                </a>
              </li>
              <li>
                <a
                  href="https://facultadmedicina.usal.es/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors text-stone-400"
                >
                  <span>Facultad de Medicina</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Institucional y Convocatorias (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#d22020] font-bold mb-5 font-mono">
              Convocatorias & PDI
            </h4>
            <ul className="space-y-3 text-sm text-stone-300 mb-6">
              <li>
                <a
                  href={DEPARTMENT_INFO.jobBoardUsalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sky-300 hover:text-sky-200 inline-flex items-center gap-1.5 font-bold transition-colors"
                >
                  <span>Bolsas de Trabajo PDI USAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://cbdusal.org/wp-content/uploads/2026/10/ejecucion-de-acuerdo.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors font-medium text-amber-300"
                >
                  <span>Ejecución de Acuerdo 2026 (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://cbdusal.org/wp-content/uploads/2023/03/reglamento-2018.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Reglamento Interno (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://cbdusal.org/wp-content/uploads/2026/03/programa.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Jornada Medicina Nuclear 2026</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bocyl.jcyl.es/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Boletín Oficial BOCYL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
            </ul>

            <div className="p-4 bg-stone-900/90 rounded-xl border border-white/10 text-xs text-stone-300 leading-relaxed font-mono">
              <span className="font-bold text-stone-200 block mb-1">
                Atención al Investigador y Estudiante:
              </span>
              Lunes a Viernes: 09:00 — 14:00 h
              <br />
              Secretaría de Dirección
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Universidad de Salamanca. Todos los derechos reservados.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a
              href="https://www.usal.es/aviso-legal"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-stone-300 underline underline-offset-2 font-medium"
            >
              Aviso Legal & Privacidad
            </a>
            <span aria-hidden="true">·</span>
            <span>Accesibilidad WCAG 2.2 AA</span>
          </div>
          <div className="text-stone-300 font-mono text-xs sm:text-sm flex items-center gap-2 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d22020]" />
            <span>Facultad de Medicina · USAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

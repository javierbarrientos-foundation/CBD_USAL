import React from 'react';
import { History, Award, Calendar, FileText } from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '1218',
    title: 'Fundación de la Universidad de Salamanca',
    badge: 'Historia & Prestigio',
    description: 'La Universidad de Salamanca es la institución universitaria más antigua de España y del mundo hispánico, pionera en la enseñanza de las ciencias médicas y la anatomía.',
    icon: History
  },
  {
    year: 'Campus Unamuno',
    title: 'Sede en la Facultad de Medicina y Colegio Mayor de Oviedo',
    badge: 'Espacio Académico',
    description: 'Ubicación central del Departamento en el Campus Miguel de Unamuno, articulado junto al Hospital Universitario de Salamanca y centros de investigación biomédica (IBSAL).',
    icon: FileText
  },
  {
    year: 'RUCT 5601568',
    title: 'Doctorado Oficial en Biomedicina Clínica y Experimental',
    badge: 'Posgrado & ANECA',
    description: 'Verificación oficial del programa de doctorado bajo el R.D. 99/2011, coordinado por el Prof. Dr. Jesús María Hernández Rivas.',
    icon: Award
  },
  {
    year: '2018',
    title: 'Reglamento de Régimen Interno del Departamento',
    badge: 'Marco Normativo',
    description: 'Aprobación definitiva de los estatutos internos que rigen la Dirección, la Comisión Permanente y el Tribunal de Reclamaciones departamental.',
    icon: FileText
  },
  {
    year: '2025 - 2026',
    title: 'Jornada de Medicina Nuclear y Convocatorias PDI Actualizadas',
    badge: 'Actualidad Científica',
    description: 'Celebración de la Jornada Científica de Medicina Nuclear, resoluciones de ejecución de acuerdos y gestión continua de las bolsas docentes del PDI.',
    icon: Calendar
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--science-surface)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <History className="w-4 h-4 text-[#d22020]" />
            <span>Memoria Institucional y Rigor Científico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Tradición médica e innovación biomédica
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            Hitos comprobados en la trayectoria del Departamento de Ciencias Biomédicas y del Diagnóstico en la Universidad de Salamanca.
          </p>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l-2 border-[#d22020]/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {TIMELINE_EVENTS.map((event, index) => {
            return (
              <div key={index} className="relative group">
                {/* Node pin in #d22020 */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[var(--science-surface)] border-2 border-[#d22020] flex items-center justify-center text-[#d22020] shadow-xs group-hover:scale-110 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d22020]" />
                </div>

                <div className="p-7 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] glass-card-hover shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="text-sm font-mono font-bold text-[#d22020] bg-[var(--usal-red-light)] px-3 py-1 rounded-md border border-[#d22020]/20">
                      {event.year}
                    </span>
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#385e9d] font-bold">
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)] mb-2.5">
                    {event.title}
                  </h3>

                  <p className="text-base text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

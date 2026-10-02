import React from 'react';
import { Building2, FileText, ExternalLink, MapPin } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';

export const DepartmentIntro: React.FC = () => {
  return (
    <section id="departamento" className="py-24 bg-[var(--science-bg)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Building2 className="w-4 h-4 text-[#d22020]" />
            <span>Marco Institucional USAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Presentación y Misión Departamental
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            El Departamento de Ciencias Biomédicas y del Diagnóstico articula una visión transversal de la medicina y la biología humana, vinculando la práctica clínica asistencial con la investigación experimental y el rigor epidemiológico.
          </p>
        </div>

        {/* 2-Column Institutional Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Editorial Text (8 cols) */}
          <div className="lg:col-span-8 bg-[var(--science-surface)] p-8 sm:p-12 rounded-2xl border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between">
            <div className="space-y-6 text-base sm:text-lg text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
              <p>
                Constituido dentro de la <strong className="font-bold text-[var(--text-primary)]">Facultad de Medicina</strong> de la Universidad de Salamanca, el departamento agrupa a profesorado e investigadores de siete disciplinas biomédicas clave. Nuestra actividad combina la docencia de grado y posgrado con el desarrollo de líneas científicas de alto impacto en el Complejo Asistencial Universitario de Salamanca, el Instituto de Investigación Biomédica de Salamanca (IBSAL) y centros asociados.
              </p>
              <p>
                Desde la <strong className="font-bold text-[var(--text-primary)]">Historia de la Ciencia</strong> y la <strong className="font-bold text-[var(--text-primary)]">Medicina Legal</strong> hasta la <strong className="font-bold text-[var(--text-primary)]">Microbiología Molecular</strong>, la <strong className="font-bold text-[var(--text-primary)]">Medicina Preventiva</strong>, la <strong className="font-bold text-[var(--text-primary)]">Pediatría</strong>, la <strong className="font-bold text-[var(--text-primary)]">Obstetricia</strong> y el <strong className="font-bold text-[var(--text-primary)]">Diagnóstico Radiológico</strong>, el departamento garantiza una formación médica basada en la evidencia y una continua transferencia de conocimiento a la sociedad.
              </p>
            </div>

            {/* Regulation notice */}
            <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d22020] font-bold block mb-1">
                  Marco Normativo Oficial
                </span>
                <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] block">
                  Reglamento Interno del Departamento
                </span>
                <span className="text-sm text-[#4d4d4d] dark:text-stone-400">
                  Regulado por los Estatutos de la Universidad de Salamanca
                </span>
              </div>
              <a
                href="https://cbdusal.org/wp-content/uploads/2023/03/reglamento-2018.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#d22020] bg-[var(--usal-red-light)] hover:bg-[#d22020] hover:text-white rounded-xl border border-[#d22020]/25 transition-colors shrink-0"
              >
                <FileText className="w-4 h-4" />
                <span>Descargar Reglamento PDF</span>
              </a>
            </div>
          </div>

          {/* Sede & Quick Contact Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-[#1b2332] via-[#243147] to-[#162130] text-white p-8 sm:p-10 flex flex-col justify-between border border-white/10 shadow-md relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 text-sky-200 text-xs font-mono uppercase tracking-widest mb-4 font-bold">
                <MapPin className="w-4 h-4 text-sky-300" />
                <span>Sede Departamental</span>
              </div>

              <h3 className="text-2xl font-serif text-white font-bold mb-3">
                Colegio Mayor de Oviedo
              </h3>

              <p className="text-sm text-stone-200/90 leading-relaxed mb-6 font-medium">
                Calle Alfonso X el Sabio s/n<br />
                Campus Miguel de Unamuno<br />
                37007 Salamanca, España
              </p>

              <div className="p-4 bg-black/40 rounded-xl border border-white/15 space-y-2.5 text-sm font-mono">
                <div className="flex justify-between items-center text-stone-200">
                  <span className="text-stone-300">Teléfono:</span>
                  <span className="text-white font-bold">+34 923 29 45 00</span>
                </div>
                <div className="flex justify-between items-center text-stone-200">
                  <span className="text-stone-300">Extensión:</span>
                  <span className="text-white font-bold">1817</span>
                </div>
                <div className="flex justify-between items-center text-stone-200">
                  <span className="text-stone-300">Correo:</span>
                  <a href={`mailto:${DEPARTMENT_INFO.email}`} className="text-sky-300 font-bold hover:underline">
                    {DEPARTMENT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href={DEPARTMENT_INFO.facultadMedicinaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl transition-colors border border-white/25"
              >
                <span>Portal de la Facultad de Medicina</span>
                <ExternalLink className="w-4 h-4 text-sky-200" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

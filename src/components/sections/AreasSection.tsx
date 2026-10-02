import React, { useState } from 'react';
import { Layers, ArrowUpRight, Microscope, GraduationCap, Check } from 'lucide-react';
import { AREAS_OF_KNOWLEDGE } from '../../data/departmentData';
import { ResearchCard } from '../cards/ResearchCard';
import { MolecularPattern } from '../visuals/MolecularPattern';

export const AreasSection: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(AREAS_OF_KNOWLEDGE[0].id);

  const activeArea =
    AREAS_OF_KNOWLEDGE.find((a) => a.id === selectedAreaId) || AREAS_OF_KNOWLEDGE[0];

  return (
    <section id="areas" className="py-24 bg-[var(--science-surface)] border-b border-[var(--border-subtle)] relative overflow-hidden">
      {/* Decorative molecular pattern in #d22020 */}
      <div className="absolute top-10 right-10 text-[#d22020] pointer-events-none hidden lg:block opacity-25">
        <MolecularPattern variant="waveform" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Layers className="w-4 h-4 text-[#d22020]" />
            <span>Investigación y Disciplinas Biomédicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Áreas de Conocimiento
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            Siete disciplinas fundamentales integran la docencia reglada, los laboratorios de ensayo y los grupos de investigación del departamento en la Universidad de Salamanca.
          </p>
        </div>

        {/* Tab selector bar with larger typography, no artificial code tags */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-2 bg-[var(--science-surface-soft)] rounded-xl border border-[var(--border-subtle)] min-w-max">
            {AREAS_OF_KNOWLEDGE.map((area) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#d22020] ${
                    isSelected
                      ? 'bg-[#d22020] text-white shadow-xs'
                      : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020] hover:bg-[var(--usal-red-light)]'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <span>{area.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main active area spotlight */}
        <div className="glass-panel rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual preview */}
            <div className="lg:col-span-5 relative bg-stone-950 min-h-[340px] lg:min-h-full overflow-hidden">
              <img
                src={activeArea.image}
                alt={activeArea.name}
                className="w-full h-full object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                width="700"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-xs font-mono font-bold tracking-wide uppercase bg-[#d22020] text-white rounded-md shadow-xs border border-white/15">
                  Área Departamental USAL
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-sm font-mono uppercase tracking-widest text-sky-200 block mb-1 font-semibold">
                  Facultad de Medicina · USAL
                </span>
                <span className="text-2xl font-serif font-bold text-white block">
                  {activeArea.name}
                </span>
              </div>
            </div>

            {/* Description & Scientific Specializations */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-primary)] leading-tight">
                    {activeArea.name}
                  </h3>
                  <a
                    href={activeArea.scientificUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] rounded-xl transition-colors shadow-2xs"
                  >
                    <span>Portal de Producción Científica</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-base sm:text-lg text-[#4d4d4d] dark:text-stone-300 leading-relaxed mb-6 font-normal">
                  {activeArea.description}
                </p>

                {/* Key Research Lines */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#d22020] mb-3">
                    <Microscope className="w-4 h-4 text-[#d22020]" />
                    <span>Líneas y Campos de Especialización</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#4d4d4d] dark:text-stone-300">
                    {activeArea.keyTopics.map((topic, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 font-medium">
                        <Check className="w-4 h-4 text-[#d22020] shrink-0" />
                        <span>{topic}</span>
                        {i < activeArea.keyTopics.length - 1 && (
                          <span aria-hidden="true" className="text-[#4d4d4d]/30 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Degree Teaching Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#385e9d] mb-3">
                    <GraduationCap className="w-4 h-4 text-[#385e9d]" />
                    <span>Docencia Universitaria Asignada</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {activeArea.docencia.map((doc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs text-[#385e9d] bg-[var(--usal-blue-light)] border border-[#385e9d]/25 rounded-md font-semibold"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footnote */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-sm text-[#4d4d4d] dark:text-stone-400 font-mono">
                <span>Facultad de Medicina · Universidad de Salamanca</span>
                <a
                  href="#docencia"
                  className="text-[#d22020] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver matriz curricular de grados</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 7 Research Cards Grid */}
        <div>
          <span className="text-sm font-mono uppercase tracking-wider text-[#4d4d4d] dark:text-stone-400 block mb-5 font-bold">
            Disciplinas y Áreas del Departamento
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AREAS_OF_KNOWLEDGE.map((area) => (
              <ResearchCard
                key={area.id}
                area={area}
                isSelected={area.id === selectedAreaId}
                onSelect={() => setSelectedAreaId(area.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

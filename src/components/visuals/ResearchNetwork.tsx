import React, { useState } from 'react';
import { ArrowUpRight, Microscope, Dna, Activity, Stethoscope, HeartHandshake, ShieldCheck } from 'lucide-react';
import { AREAS_OF_KNOWLEDGE } from '../../data/departmentData';

const ECOSYSTEM_STEPS = [
  { id: 'ciencia', label: 'CIENCIA', icon: Dna, desc: 'Bases biológicas, moleculares e históricas' },
  { id: 'investigacion', label: 'INVESTIGACIÓN', icon: Microscope, desc: 'Estudios experimentales y epidemiológicos en USAL e IBSAL' },
  { id: 'diagnostico', label: 'DIAGNÓSTICO', icon: Activity, desc: 'Microbiología, imagenología radiológica y peritaje forense' },
  { id: 'medicina', label: 'MEDICINA', icon: Stethoscope, desc: 'Práctica clínica en el Complejo Asistencial Universitario' },
  { id: 'personas', label: 'PERSONAS', icon: HeartHandshake, desc: 'Salud comunitaria, pacientes y formación médica integral' }
];

export const ResearchNetwork: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(AREAS_OF_KNOWLEDGE[3].id); // Microbiología default

  const currentArea = AREAS_OF_KNOWLEDGE.find(a => a.id === selectedAreaId) || AREAS_OF_KNOWLEDGE[0];

  return (
    <section className="py-24 bg-science-grid border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with larger typography */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Activity className="w-4 h-4 text-[#d22020]" />
            <span>Ecosistema Visual Científico USAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            La ciencia que conecta conocimiento, diagnóstico y salud
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
            El departamento articula un circuito riguroso de transferencia: desde la investigación biológica y epidemiológica fundamental hasta el diagnóstico de precisión y la atención a las personas.
          </p>
        </div>

        {/* The 5-Stage Scientific Pipeline Concept Visualizer */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden shadow-xs border border-[var(--border-subtle)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {ECOSYSTEM_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center p-3">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--usal-blue-light)] text-[#385e9d] flex items-center justify-center mb-3 shadow-2xs border border-[#385e9d]/25">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#d22020]">
                    0{index + 1}. {step.label}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-snug">
                    {step.desc}
                  </p>

                  {/* Connecting Arrow */}
                  {index < ECOSYSTEM_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-7 -right-3 text-[#385e9d] opacity-50 text-base font-mono">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Knowledge Nodes & Detailed Area Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 7 Knowledge Area Nodes Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-4 font-bold">
              Áreas Departamentales Conectadas
            </span>
            
            {AREAS_OF_KNOWLEDGE.map((area) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[var(--science-surface)] border-[#d22020] shadow-sm ring-2 ring-[#d22020]'
                      : 'bg-[var(--science-surface)]/90 border-[var(--border-subtle)] hover:bg-[var(--science-surface)] hover:border-[#d22020]/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-3 h-3 rounded-full transition-transform ${
                        isSelected ? 'bg-[#d22020] scale-125' : 'bg-[#385e9d]/60'
                      }`}
                    />
                    <div>
                      <h4 className={`text-base font-semibold leading-snug ${
                        isSelected ? 'text-[#d22020]' : 'text-[var(--text-primary)]'
                      }`}>
                        {area.name}
                      </h4>
                      <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
                        Área Oficial USAL · Facultad de Medicina
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#d22020] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Detalle →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Scientific Matrix Spotlight (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-10 border border-[var(--border-subtle)] shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d22020] font-bold">
                  Especialidad Biomédica USAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-primary)] mt-1">
                  {currentArea.name}
                </h3>
              </div>
              <a
                href={currentArea.scientificUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] rounded-xl transition-colors shadow-2xs"
              >
                <span>Portal Producción Científica</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Scientific Description in generous font size */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed my-6 font-normal">
              {currentArea.description}
            </p>

            {/* Scientific Lines & Applied Specialization */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d22020] font-bold block mb-2.5">
                  Líneas de Investigación y Diagnóstico
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentArea.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/20 font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Degrees / Teaching Responsibilities */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#385e9d] font-bold block mb-2.5">
                  Docencia Universitaria Asignada
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentArea.docencia.map((doc, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-[var(--usal-blue-light)] text-[#385e9d] border border-[#385e9d]/20 font-semibold"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Diagnostic Rigor Footnote */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-[#385e9d]" />
                <span>Docencia e Investigación Validada por USAL</span>
              </span>
              <a
                href="#areas"
                className="text-[#d22020] font-bold hover:underline"
              >
                Ver matriz curricular completa &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

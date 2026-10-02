import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { DEGREE_PROGRAMS } from '../../data/departmentData';
import { TeachingCard } from '../cards/TeachingCard';

export const TeachingSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'Grado' | 'Máster' | 'Doctorado'>('all');

  const filteredPrograms =
    filterType === 'all'
      ? DEGREE_PROGRAMS
      : DEGREE_PROGRAMS.filter((p) => {
          if (filterType === 'Máster') {
            return p.type === 'Máster' || p.type === 'Título Propio';
          }
          return p.type === filterType;
        });

  return (
    <section id="docencia" className="py-24 bg-[var(--science-surface)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
              <GraduationCap className="w-4 h-4 text-[#d22020]" />
              <span>Oferta Académica Departamental</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
              Docencia de Grado y Posgrado
            </h2>
            <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
              El departamento imparte docencia transversal en 8 grados de ciencias de la salud, posgrados y el Programa Oficial de Doctorado en Biomedicina de la Universidad de Salamanca.
            </p>
          </div>

          {/* Filter segment with larger buttons */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[var(--science-surface-soft)] rounded-xl border border-[var(--border-subtle)] shrink-0 shadow-2xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                filterType === 'all'
                  ? 'bg-[#d22020] text-white shadow-xs'
                  : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020]'
              }`}
            >
              Todos ({DEGREE_PROGRAMS.length})
            </button>
            <button
              onClick={() => setFilterType('Grado')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                filterType === 'Grado'
                  ? 'bg-[#d22020] text-white shadow-xs'
                  : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020]'
              }`}
            >
              Grados (8)
            </button>
            <button
              onClick={() => setFilterType('Máster')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                filterType === 'Máster'
                  ? 'bg-[#d22020] text-white shadow-xs'
                  : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020]'
              }`}
            >
              Másteres (3)
            </button>
            <button
              onClick={() => setFilterType('Doctorado')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                filterType === 'Doctorado'
                  ? 'bg-[#d22020] text-white shadow-xs'
                  : 'text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020]'
              }`}
            >
              Doctorado (1)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-10">
          {/* Doctorate Spotlight if included in filter */}
          {(filterType === 'all' || filterType === 'Doctorado') && (
            <div>
              {DEGREE_PROGRAMS.filter((p) => p.type === 'Doctorado').map((prog) => (
                <TeachingCard key={prog.id} program={prog} />
              ))}
            </div>
          )}

          {/* Grados & Másteres Cards Grid */}
          {filterType !== 'Doctorado' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPrograms
                .filter((p) => p.type !== 'Doctorado')
                .map((program) => (
                  <TeachingCard key={program.id} program={program} />
                ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

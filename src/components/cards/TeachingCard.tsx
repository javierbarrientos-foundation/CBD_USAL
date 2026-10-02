import React from 'react';
import { ArrowUpRight, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { DegreeProgram } from '../../types';

interface TeachingCardProps {
  program: DegreeProgram;
}

export const TeachingCard: React.FC<TeachingCardProps> = ({ program }) => {
  const isDoctorate = program.type === 'Doctorado';

  if (isDoctorate) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-[#1c2a42] via-[#243754] to-[#2f4970] text-white p-6 sm:p-10 border border-white/20 shadow-lg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#385e9d]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-[#d22020] text-white shadow-xs mb-3.5">
              <Award className="w-4 h-4" />
              <span>Programa Oficial de Doctorado · RUCT {program.ructCode}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug mb-3.5 text-white">
              {program.title}
            </h3>

            <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed mb-5 font-normal">
              {program.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="font-mono font-semibold">Coordinador: {program.coordinator}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verificado por ANECA y Consejo de Universidades</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <a
              href={program.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] rounded-xl transition-colors shadow-md whitespace-nowrap"
            >
              <span>Admisión y Guía Académica</span>
              <ArrowUpRight className="w-4 h-4 text-red-100" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col justify-between glass-card-hover group shadow-xs">
      <div>
        <div className="relative aspect-16/9 bg-stone-200 dark:bg-stone-800 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
            loading="lazy"
            width="500"
            height="280"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-mono font-bold uppercase bg-[#d22020] text-white rounded-md tracking-wider shadow-xs border border-white/10">
              {program.type}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-xs font-semibold text-stone-200 uppercase tracking-wider block font-mono">
              {program.faculty}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-serif font-bold text-[var(--text-primary)] mb-2.5 leading-snug group-hover:text-[#d22020] transition-colors">
            {program.title}
          </h4>
          <p className="text-sm text-[#4d4d4d] dark:text-stone-300 line-clamp-3 leading-relaxed mb-4">
            {program.description}
          </p>
          {program.credits && (
            <div className="text-xs font-mono text-[#385e9d] font-bold">
              {program.credits} · {program.modality}
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-[var(--science-surface-soft)] border-t border-[var(--border-subtle)] flex items-center justify-between text-sm">
        <span className="text-xs font-mono text-[#4d4d4d] dark:text-stone-400 flex items-center gap-1.5 font-semibold">
          <GraduationCap className="w-4 h-4 text-[#d22020]" />
          <span>Grado Oficial USAL</span>
        </span>
        <a
          href={program.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-bold text-[#d22020] hover:text-[#b31616] hover:underline"
        >
          <span>Plan Docente</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

import React from 'react';
import { Mail, ArrowUpRight, Award, MapPin } from 'lucide-react';
import { LeadershipMember } from '../../types';

interface PersonCardProps {
  person: LeadershipMember;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] p-6 flex flex-col justify-between glass-card-hover group shadow-xs">
      <div>
        {/* Clean, well-lit Photo Container without ANY dark overlays */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800/80 border border-[var(--border-subtle)] mb-5">
          <img
            src={person.photoUrl}
            alt={person.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
            loading="lazy"
            width="400"
            height="400"
          />
        </div>

        {/* Header Badges & Role */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/25">
            {person.role}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#385e9d] font-semibold">
            <Award className="w-3.5 h-3.5 text-[#385e9d]" />
            <span>Órgano de Gobierno USAL</span>
          </span>
        </div>

        {/* Name in large, clear, readable typography */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)] leading-snug group-hover:text-[#d22020] transition-colors mb-1.5">
          {person.name}
        </h3>

        {/* Subtitle / Department Role */}
        <div className="text-sm font-mono font-semibold text-[#385e9d] mb-3">
          {person.departmentRole}
        </div>

        {/* Official Despacho / Office Location */}
        {person.office && (
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] text-xs text-[#4d4d4d] dark:text-stone-300 mb-4 font-mono">
            <MapPin className="w-4 h-4 text-[#d22020] shrink-0 mt-0.5" />
            <span className="leading-snug">{person.office}</span>
          </div>
        )}

        {/* Description / Credentials with generous font size and comfortable line height */}
        <p className="text-sm text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
          {person.credentials}
        </p>
      </div>

      {/* Footer Contact & Profile Links */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-sm">
        <a
          href={`mailto:${person.email}`}
          className="inline-flex items-center gap-2 text-sm font-mono text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020] transition-colors"
          title={`Escribir a ${person.name}`}
        >
          <Mail className="w-4 h-4 text-[#d22020] shrink-0" />
          <span className="font-semibold">{person.email}</span>
        </a>

        <a
          href={person.profileUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#d22020] bg-[var(--usal-red-light)] hover:bg-[#d22020] hover:text-white rounded-lg border border-[#d22020]/25 transition-all"
        >
          <span>Producción Científica</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

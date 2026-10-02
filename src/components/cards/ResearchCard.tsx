import React from 'react';
import { ArrowUpRight, Microscope } from 'lucide-react';
import { AreaOfKnowledge } from '../../types';

interface ResearchCardProps {
  area: AreaOfKnowledge;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  area,
  isSelected = false,
  onSelect
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
        isSelected
          ? 'bg-[var(--science-surface)] border-[#d22020] shadow-md ring-2 ring-[#d22020]'
          : 'bg-[var(--science-surface)] border-[var(--border-subtle)] hover:border-[#d22020]/50 glass-card-hover'
      }`}
    >
      <div>
        {/* Photo Container */}
        <div className="relative aspect-16/10 bg-stone-900 overflow-hidden">
          <img
            src={area.image}
            alt={area.name}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 brightness-95"
            loading="lazy"
            width="600"
            height="375"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-mono font-bold uppercase bg-[#d22020] text-white rounded-md tracking-wider shadow-xs border border-white/15">
              Área Departamental USAL
            </span>
          </div>

          <div className="absolute bottom-3.5 left-4 right-4 text-white">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-200 block mb-0.5 font-semibold">
              Facultad de Medicina
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold leading-snug drop-shadow-sm text-white">
              {area.name}
            </h3>
          </div>
        </div>

        {/* Content with comfortable, larger font sizes */}
        <div className="p-6">
          <p className="text-sm text-[#4d4d4d] dark:text-stone-300 line-clamp-3 leading-relaxed mb-5">
            {area.description}
          </p>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#d22020] font-bold uppercase tracking-wider">
              <Microscope className="w-4 h-4 text-[#d22020]" />
              <span>Líneas científicas destacadas</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {area.keyTopics.slice(0, 3).map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/20 font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer link in larger, clear typography */}
      <div className="px-6 py-4 bg-[var(--science-surface-soft)] border-t border-[var(--border-subtle)] flex items-center justify-between text-sm">
        <span className="text-xs font-mono text-[#4d4d4d] dark:text-stone-400 font-semibold">
          USAL Investigación
        </span>
        <a
          href={area.scientificUrl}
          target="_blank"
          rel="noreferrer noopener"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 font-bold text-[#d22020] hover:text-[#b31616] hover:underline"
        >
          <span>Producción Científica</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

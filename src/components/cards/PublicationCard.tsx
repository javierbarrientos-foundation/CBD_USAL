import React from 'react';
import { FileText, Download, Calendar, Sparkles } from 'lucide-react';
import { DocumentItem } from '../../types';

interface PublicationCardProps {
  doc: DocumentItem;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ doc }) => {
  const isRecent = doc.date?.includes('Octubre') || doc.date?.includes('2026');

  return (
    <div className="p-6 rounded-2xl bg-[var(--science-surface)] border border-[var(--border-subtle)] hover:border-[#d22020]/50 glass-card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-[var(--usal-red-light)] text-[#d22020] shrink-0 border border-[#d22020]/20">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/25">
              {doc.categoryLabel}
            </span>

            {isRecent && (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Actualizado</span>
              </span>
            )}

            {doc.date && (
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-[#4d4d4d] dark:text-stone-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#385e9d]" />
                <span>{doc.date}</span>
              </span>
            )}
            
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--science-surface-soft)] text-[#4d4d4d] dark:text-stone-300 font-semibold border border-[var(--border-subtle)]">
              {doc.fileType}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-serif font-bold text-[var(--text-primary)] leading-snug group-hover:text-[#d22020] transition-colors">
            {doc.title}
          </h4>
        </div>
      </div>

      <div className="shrink-0 sm:self-center">
        <a
          href={doc.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] active:bg-[#961212] rounded-xl transition-colors shadow-2xs whitespace-nowrap"
        >
          <Download className="w-4 h-4 opacity-90 text-red-200" />
          <span>Descargar {doc.fileType}</span>
        </a>
      </div>
    </div>
  );
};

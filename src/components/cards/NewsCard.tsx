import React from 'react';
import { Calendar, ArrowUpRight, Newspaper } from 'lucide-react';
import { DepartmentNewsItem } from '../../types';

interface NewsCardProps {
  item: DepartmentNewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const targetUrl = item.url || item.pdfUrl || '#';

  return (
    <div className="bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col justify-between glass-card-hover group shadow-xs">
      <div>
        {item.image && (
          <div className="relative aspect-16/9 bg-stone-200 dark:bg-stone-800 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
              loading="lazy"
              width="600"
              height="338"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-mono uppercase bg-[#d22020] text-white rounded-md tracking-wider font-bold">
                {item.category}
              </span>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 mb-2.5 font-mono">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#385e9d]" />
              {item.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#d22020]">USAL Oficial</span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)] mb-2.5 leading-snug group-hover:text-[#d22020] transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-[#4d4d4d] dark:text-stone-300 line-clamp-3 leading-relaxed">
            {item.summary}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 bg-[var(--science-surface-soft)] border-t border-[var(--border-subtle)] flex items-center justify-between text-sm">
        <span className="text-xs font-mono text-[#4d4d4d] dark:text-stone-400 flex items-center gap-1.5 font-semibold">
          <Newspaper className="w-4 h-4 text-[#385e9d]" />
          <span>Comunicaciones</span>
        </span>
        <a
          href={targetUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-bold text-[#d22020] hover:text-[#b31616] hover:underline"
        >
          <span>Acceder</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

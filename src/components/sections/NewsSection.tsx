import React from 'react';
import { Newspaper } from 'lucide-react';
import { DEPARTMENT_NEWS } from '../../data/departmentData';
import { NewsCard } from '../cards/NewsCard';

export const NewsSection: React.FC = () => {
  return (
    <section id="actualidad" className="py-20 bg-[var(--science-surface)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[var(--usal-primary)] bg-[var(--usal-blue-light)] border border-[var(--border-subtle)] mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Actualidad y Actividad Científica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-medium tracking-tight mb-4">
            Noticias y Comunicaciones
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Comunicaciones departamentales, convocatorias de investigación predoctoral y jornadas científicas de medicina nuclear en la Universidad de Salamanca.
          </p>
        </div>

        {/* News Grid using NewsCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPARTMENT_NEWS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

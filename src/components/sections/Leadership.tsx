import React from 'react';
import { Award } from 'lucide-react';
import { LEADERSHIP } from '../../data/departmentData';
import { PersonCard } from '../cards/PersonCard';

export const Leadership: React.FC = () => {
  return (
    <section id="direccion" className="py-24 bg-[var(--science-bg)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Award className="w-4 h-4 text-[#d22020]" />
            <span>Órganos Unipersonales de Gobierno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Equipo de Dirección
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            El Director ostenta la representación del Departamento y ejerce las funciones de dirección y gestión estratégica, con la colaboración directa del Subdirector y de la Secretaria Académica.
          </p>
        </div>

        {/* 3 Person Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {LEADERSHIP.map((leader) => (
            <PersonCard key={leader.name} person={leader} />
          ))}
        </div>

      </div>
    </section>
  );
};

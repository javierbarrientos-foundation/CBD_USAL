import React, { useState } from 'react';
import { FileText, Search, ArrowUpRight, Sparkles } from 'lucide-react';
import { OFFICIAL_DOCUMENTS, DEPARTMENT_INFO } from '../../data/departmentData';
import { PublicationCard } from '../cards/PublicationCard';

export const DocumentsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'Todos los Documentos' },
    { key: 'convocatorias', label: 'Convocatorias y Ayudas' },
    { key: 'bolsa_pdi', label: 'Bolsa de Empleo PDI' },
    { key: 'oposiciones', label: 'Oposiciones y BOCYL' },
    { key: 'actas', label: 'Actas de Selección' },
    { key: 'listas_g078', label: 'Listas Definitivas G078' },
    { key: 'listas_provisionales', label: 'Listas Provisionales' },
    { key: 'reglamento', label: 'Reglamento Interno' }
  ];

  const filteredDocs = OFFICIAL_DOCUMENTS.filter((doc) => {
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      doc.title.toLowerCase().includes(q) ||
      doc.categoryLabel.toLowerCase().includes(q) ||
      (doc.date && doc.date.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="documentos" className="py-24 bg-[var(--science-bg)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
              <FileText className="w-4 h-4 text-[#d22020]" />
              <span>Tablón Oficial y Convocatorias Actualizadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
              Documentos Oficiales y Bolsas PDI
            </h2>
            <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
              Consulte y descargue actas oficiales, resoluciones de concursos, listas provisionales y definitivas de aspirantes admitidos y la normativa de régimen interno del departamento.
            </p>
          </div>

          <a
            href={DEPARTMENT_INFO.jobBoardUsalUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] active:bg-[#961212] rounded-xl transition-colors shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-[#d22020]"
          >
            <span>Portal Central de Bolsas USAL</span>
            <ArrowUpRight className="w-4 h-4 text-red-200" />
          </a>
        </div>

        {/* Highlight notification for recent updates */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[var(--science-surface)] border border-[#d22020]/20 flex items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#d22020] uppercase tracking-wider block">
                Actualización Oficial Octubre 2026
              </span>
              <p className="text-sm sm:text-base font-medium text-[var(--text-primary)]">
                Incorporadas las resoluciones de Ejecución de Acuerdo y los Anexos de Composición de Comisiones de Selección.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-[var(--usal-red-light)] text-[#d22020]">
            {OFFICIAL_DOCUMENTS.length} Documentos
          </span>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs with larger font */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#d22020] ${
                  selectedCategory === cat.key
                    ? 'bg-[#d22020] text-white shadow-xs'
                    : 'bg-[var(--science-surface)] text-[#4d4d4d] dark:text-stone-300 hover:text-[#d22020] hover:bg-[var(--usal-red-light)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box with comfortable input size */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#4d4d4d] dark:text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrar por título, plaza o fecha..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-[var(--science-surface)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all"
            />
          </div>

        </div>

        {/* Documents list */}
        <div className="space-y-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => <PublicationCard key={doc.id} doc={doc} />)
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[var(--science-surface)] border border-[var(--border-subtle)] text-[#4d4d4d]">
              <p className="text-base text-[var(--text-primary)] font-semibold">
                No se encontraron documentos para los criterios seleccionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-sm font-bold text-[#d22020] hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

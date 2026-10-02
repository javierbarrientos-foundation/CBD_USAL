import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, FileText, User, Layers, ArrowRight } from 'lucide-react';
import {
  AREAS_OF_KNOWLEDGE,
  LEADERSHIP,
  COMMITTEES,
  DEGREE_PROGRAMS,
  OFFICIAL_DOCUMENTS
} from '../../data/departmentData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (targetId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredAreas = q
    ? AREAS_OF_KNOWLEDGE.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.keyTopics.some((t) => t.toLowerCase().includes(q))
      )
    : [];

  const filteredDegrees = q
    ? DEGREE_PROGRAMS.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.faculty.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      )
    : [];

  const filteredDocs = q
    ? OFFICIAL_DOCUMENTS.filter(
        (doc) =>
          doc.title.toLowerCase().includes(q) ||
          doc.categoryLabel.toLowerCase().includes(q) ||
          (doc.date && doc.date.toLowerCase().includes(q))
      )
    : [];

  const filteredPeople = q
    ? [
        ...LEADERSHIP.filter(
          (l) => l.name.toLowerCase().includes(q) || l.role.toLowerCase().includes(q)
        ),
        ...COMMITTEES.flatMap((c) =>
          c.members
            .filter((m) => m.name.toLowerCase().includes(q))
            .map((m) => ({
              name: m.name,
              role: `${c.name} (${m.role || 'Miembro'})`,
              email: '',
              profileUrl: m.profileUrl || '',
              photoUrl: '',
              departmentRole: c.name,
              credentials: ''
            }))
        )
      ]
    : [];

  const hasResults =
    filteredAreas.length > 0 ||
    filteredDegrees.length > 0 ||
    filteredDocs.length > 0 ||
    filteredPeople.length > 0;

  const handleSelect = (targetId: string) => {
    onClose();
    if (onSelectAction) {
      onSelectAction(targetId);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/65 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl bg-[var(--science-surface)] rounded-2xl shadow-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="p-4 border-b border-[var(--border-subtle)] flex items-center gap-3 bg-[var(--science-surface)]">
          <Search className="w-5 h-5 text-[#d22020] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar área, profesor, grado, documento o plaza..."
            className="w-full bg-transparent text-sm sm:text-base text-[var(--text-primary)] placeholder-[#4d4d4d]/60 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#4d4d4d] hover:text-[#d22020] rounded-sm mr-1"
              aria-label="Borrar texto"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#4d4d4d] bg-[var(--science-surface-soft)] hover:bg-[var(--usal-red-light)] rounded border border-[var(--border-subtle)]"
          >
            ESC
          </button>
        </div>

        {/* Results view with larger font sizes */}
        <div className="overflow-y-auto p-5 space-y-6 text-base">
          {!q ? (
            <div className="py-10 text-center text-[#4d4d4d] dark:text-stone-400">
              <p className="text-xs uppercase tracking-wider text-[#d22020] font-bold mb-3 font-mono">
                Búsqueda Rápida Institucional USAL
              </p>
              <p className="text-base text-[#4d4d4d] dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                Prueba buscando términos como <span className="font-bold text-[#d22020]">"Microbiología"</span>, <span className="font-bold text-[#385e9d]">"Medicina Preventiva"</span>, <span className="font-bold text-[#d22020]">"Acuerdo"</span>, <span className="font-bold text-[#385e9d]">"Doctorado"</span> o <span className="font-bold text-[#4d4d4d] dark:text-white">"Ignacio"</span>.
              </p>
            </div>
          ) : !hasResults ? (
            <div className="py-10 text-center text-[#4d4d4d]">
              <p className="text-base text-[var(--text-primary)] font-semibold">No se encontraron resultados para "{query}"</p>
              <p className="text-sm text-[#4d4d4d]/80 mt-1.5">Verifica la ortografía o intenta con términos más generales.</p>
            </div>
          ) : (
            <>
              {/* Areas */}
              {filteredAreas.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#d22020] mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#d22020]" />
                    <span>Áreas de Conocimiento ({filteredAreas.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {filteredAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleSelect('areas')}
                        className="w-full text-left p-3.5 rounded-xl hover:bg-[var(--usal-red-light)] flex items-center justify-between group transition-colors border border-transparent hover:border-[#d22020]/20"
                      >
                        <div>
                          <div className="font-bold text-base text-[var(--text-primary)] group-hover:text-[#d22020]">
                            {area.name}
                          </div>
                          <div className="text-sm text-[#4d4d4d] dark:text-stone-300 line-clamp-1 mt-0.5">
                            {area.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#4d4d4d]/60 group-hover:text-[#d22020] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Degrees */}
              {filteredDegrees.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#385e9d] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#385e9d]" />
                    <span>Docencia y Programas ({filteredDegrees.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {filteredDegrees.map((deg) => (
                      <button
                        key={deg.id}
                        onClick={() => handleSelect('docencia')}
                        className="w-full text-left p-3.5 rounded-xl hover:bg-[var(--usal-blue-light)] flex items-center justify-between group transition-colors border border-transparent hover:border-[#385e9d]/20"
                      >
                        <div>
                          <div className="font-bold text-base text-[var(--text-primary)] group-hover:text-[#385e9d]">
                            {deg.title}
                          </div>
                          <div className="text-sm text-[#4d4d4d] dark:text-stone-300 line-clamp-1 mt-0.5">
                            {deg.faculty} · {deg.type}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#4d4d4d]/60 group-hover:text-[#385e9d] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {filteredDocs.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#d22020] mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#d22020]" />
                    <span>Documentos Oficiales ({filteredDocs.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {filteredDocs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => handleSelect('documentos')}
                        className="w-full text-left p-3.5 rounded-xl hover:bg-[var(--usal-red-light)] flex items-center justify-between group transition-colors border border-transparent hover:border-[#d22020]/20"
                      >
                        <div>
                          <div className="font-bold text-base text-[var(--text-primary)] group-hover:text-[#d22020]">
                            {doc.title}
                          </div>
                          <div className="text-sm text-[#4d4d4d] dark:text-stone-300 mt-0.5">
                            {doc.categoryLabel} {doc.date && `· ${doc.date}`}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#4d4d4d]/60 group-hover:text-[#d22020] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* People */}
              {filteredPeople.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4d4d4d] dark:text-stone-400 mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#d22020]" />
                    <span>Profesorado y Cargos ({filteredPeople.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {filteredPeople.map((person, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect('direccion')}
                        className="w-full text-left p-3.5 rounded-xl hover:bg-[var(--science-surface-soft)] flex items-center justify-between group transition-colors border border-transparent hover:border-[var(--border-subtle)]"
                      >
                        <div>
                          <div className="font-bold text-base text-[var(--text-primary)] group-hover:text-[#d22020]">
                            {person.name}
                          </div>
                          <div className="text-sm text-[#4d4d4d] dark:text-stone-300 mt-0.5">
                            {person.departmentRole || person.role}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#4d4d4d]/60 group-hover:text-[#d22020] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[var(--science-surface-soft)] border-t border-[var(--border-subtle)] text-[11px] text-[#4d4d4d] dark:text-stone-400 flex items-center justify-between font-mono">
          <span>Departamento de Ciencias Biomédicas y del Diagnóstico</span>
          <span>Presione ESC para cerrar</span>
        </div>
      </div>
    </div>
  );
};

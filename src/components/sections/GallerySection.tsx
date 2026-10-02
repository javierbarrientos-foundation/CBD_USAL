import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/departmentData';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-[var(--science-bg)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[var(--usal-primary)] bg-[var(--usal-blue-light)] border border-[var(--border-subtle)] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Espacios, Microscopía e Instalaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-medium tracking-tight mb-4">
            Galería Institucional y Científica
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Instalaciones de la Facultad de Medicina, microscopía diagnóstica, laboratorios experimentales y espacios docentes de la Universidad de Salamanca.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => setActivePhoto(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-[var(--border-subtle)] aspect-4/3 cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-sky-200" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono font-medium text-sky-300 block mb-0.5 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-medium text-white leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <span className="text-xs text-stone-300 block mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto !== null && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setActivePhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 text-stone-300 hover:text-white bg-stone-800/80 rounded-full transition-colors"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 bg-black flex items-center justify-center">
                <img
                  src={GALLERY_ITEMS[activePhoto].image}
                  alt={GALLERY_ITEMS[activePhoto].title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-stone-900 border-t border-stone-800 text-white">
                <span className="text-xs font-mono text-[var(--usal-primary-light)] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[activePhoto].category}
                </span>
                <h4 className="text-lg font-serif font-medium">
                  {GALLERY_ITEMS[activePhoto].title}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {GALLERY_ITEMS[activePhoto].subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

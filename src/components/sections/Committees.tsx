import React from 'react';
import { Users, Scale, ArrowUpRight } from 'lucide-react';
import { COMMITTEES } from '../../data/departmentData';

export const Committees: React.FC = () => {
  return (
    <section id="comisiones" className="py-24 bg-[var(--science-bg)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Users className="w-4 h-4 text-[#d22020]" />
            <span>Órganos Colegiados de Representación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Comisiones Departamentales
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            Estructuras estatutarias encargadas del gobierno permanente, la ordenación docente y la resolución imparcial de reclamaciones académicas de acuerdo con los Estatutos de la Universidad de Salamanca.
          </p>
        </div>

        {/* 2-Column Grid for Committees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Committee 1: Comisión Permanente (Rojo USAL #d22020) */}
          {COMMITTEES.slice(0, 1).map((comm) => (
            <div
              key={comm.id}
              className="bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 sm:p-10 shadow-xs flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/25">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)]">
                      {comm.name}
                    </h3>
                    <span className="text-sm text-[#4d4d4d] dark:text-stone-400 font-mono font-semibold">
                      Órgano de gobierno ejecutivo ordinario
                    </span>
                  </div>
                </div>

                <p className="text-base text-[#4d4d4d] dark:text-stone-300 mb-6 leading-relaxed">
                  {comm.description}
                </p>

                {/* Members list */}
                <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
                  {comm.members.map((m, idx) => (
                    <div
                      key={idx}
                      className="py-3 flex items-center justify-between text-sm sm:text-base"
                    >
                      <span className="font-semibold text-[var(--text-primary)]">
                        {m.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#4d4d4d] dark:text-stone-400 font-mono text-xs sm:text-sm font-medium">
                          {m.role}
                        </span>
                        {m.profileUrl && (
                          <a
                            href={m.profileUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-[#d22020] hover:text-[#b31616] transition-colors p-1"
                            aria-label={`Perfil de ${m.name}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 text-xs sm:text-sm font-mono text-[#4d4d4d] dark:text-stone-400">
                Miembros electos por el Consejo de Departamento según normativa USAL.
              </div>
            </div>
          ))}

          {/* Committee 2: Tribunal de Reclamaciones (Azul USAL #385e9d) */}
          {COMMITTEES.slice(1, 2).map((comm) => {
            const titulares = comm.members.filter((m) => m.type === 'titular');
            const suplentes = comm.members.filter((m) => m.type === 'suplente');

            return (
              <div
                key={comm.id}
                className="bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 sm:p-10 shadow-xs flex flex-col justify-between glass-card-hover"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--usal-blue-light)] text-[#385e9d] border border-[#385e9d]/25">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)]">
                        {comm.name}
                      </h3>
                      <span className="text-sm text-[#4d4d4d] dark:text-stone-400 font-mono font-semibold">
                        Garantías académicas y evaluación
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-[#4d4d4d] dark:text-stone-300 mb-6 leading-relaxed">
                    {comm.description}
                  </p>

                  {/* Titulares */}
                  <div className="mb-6">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#385e9d] mb-2.5">
                      Profesores Titulares
                    </div>
                    <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
                      {titulares.map((m, idx) => (
                        <div
                          key={idx}
                          className="py-3 flex items-center justify-between text-sm sm:text-base"
                        >
                          <span className="font-semibold text-[var(--text-primary)]">
                            {m.name}
                          </span>
                          {m.profileUrl && (
                            <a
                              href={m.profileUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="text-[#d22020] hover:text-[#b31616] transition-colors p-1"
                              aria-label={`Perfil de ${m.name}`}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suplentes */}
                  <div>
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#4d4d4d] dark:text-stone-400 mb-2.5">
                      Profesores Suplentes
                    </div>
                    <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
                      {suplentes.map((m, idx) => (
                        <div
                          key={idx}
                          className="py-3 flex items-center justify-between text-sm sm:text-base"
                        >
                          <span className="font-medium text-[var(--text-secondary)]">
                            {m.name}
                          </span>
                          {m.profileUrl && (
                            <a
                              href={m.profileUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="text-[#d22020] hover:text-[#b31616] transition-colors p-1"
                              aria-label={`Perfil de ${m.name}`}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 text-xs sm:text-sm font-mono text-[#4d4d4d] dark:text-stone-400">
                  Resolución de reclamaciones sobre calificaciones finales y revisiones de examen.
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

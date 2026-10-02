import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Sparkles, Award, ArrowUpRight, GraduationCap, Microscope, ShieldCheck } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';

interface DataPoint {
  label: string;
  shortLabel: string;
  value: number;
  unit: string;
  color: string;
  secondary: string;
  description: string;
  highlight?: string;
}

export const DepartmentAnalyticsChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ects' | 'areas' | 'pdi'>('ects');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Dataset 1: Docencia en Créditos ECTS por Titulación
  const ectsData: DataPoint[] = [
    {
      label: 'Grado en Medicina',
      shortLabel: 'Medicina',
      value: 360,
      unit: 'ECTS',
      color: '#d22020',
      secondary: '#b31616',
      description: '6 cursos lectivos · Formación clínica en Complejo Asistencial Universitario',
      highlight: 'Titulación Principal'
    },
    {
      label: 'Grado en Odontología',
      shortLabel: 'Odontología',
      value: 300,
      unit: 'ECTS',
      color: '#385e9d',
      secondary: '#2a4778',
      description: '5 cursos lectivos · Prácticas odontológicas y medicina oral diagnóstica',
      highlight: 'Clínica Odontológica'
    },
    {
      label: 'Grado en Fisioterapia',
      shortLabel: 'Fisioterapia',
      value: 240,
      unit: 'ECTS',
      color: '#0284c7',
      secondary: '#0369a1',
      description: '4 cursos · Medicina física, rehabilitación y biomecánica funcional'
    },
    {
      label: 'Grado en Terapia Ocupacional',
      shortLabel: 'Terapia Ocup.',
      value: 240,
      unit: 'ECTS',
      color: '#0d9488',
      secondary: '#0f766e',
      description: '4 cursos · Autonomía personal, afecciones médico-quirúrgicas y salud comunitaria'
    },
    {
      label: 'Grado en Criminología',
      shortLabel: 'Criminología',
      value: 240,
      unit: 'ECTS',
      color: '#7c3aed',
      secondary: '#6d28d9',
      description: '4 cursos · Medicina legal, patología forense y toxicología médica'
    },
    {
      label: 'Grado en Trabajo Social',
      shortLabel: 'Trabajo Social',
      value: 240,
      unit: 'ECTS',
      color: '#ea580c',
      secondary: '#c2410c',
      description: '4 cursos · Salud pública preventiva y epidemiología de la salud'
    },
    {
      label: 'Grado en Traducción e Interpretación',
      shortLabel: 'Traducción',
      value: 240,
      unit: 'ECTS',
      color: '#475569',
      secondary: '#334155',
      description: '4 cursos · Terminología médica internacional y comunicación biomédica'
    },
    {
      label: 'Grado en Humanidades',
      shortLabel: 'Humanidades',
      value: 240,
      unit: 'ECTS',
      color: '#ca8a04',
      secondary: '#a16207',
      description: '4 cursos · Historia de la ciencia y pensamiento médico salmantino'
    },
    {
      label: 'Másteres & Programas de Posgrado',
      shortLabel: 'Posgrados',
      value: 180,
      unit: 'ECTS',
      color: '#be185d',
      secondary: '#9d174d',
      description: 'Máster Enfermedades Tropicales, Metodología de la Investigación y Gestión del Agua',
      highlight: 'Posgrados Oficiales'
    }
  ];

  // Dataset 2: Distribución de Grupos y Ensayos Científicos por Área (%)
  const areasDistribution: DataPoint[] = [
    {
      label: 'Microbiología Médica',
      shortLabel: 'Microbiología',
      value: 28,
      unit: '% de actividad',
      color: '#d22020',
      secondary: '#b31616',
      description: 'Virología molecular, resistencias antimicrobianas y enfermedades infecciosas emergentes'
    },
    {
      label: 'Medicina Preventiva y Salud Pública',
      shortLabel: 'Med. Preventiva',
      value: 22,
      unit: '% de actividad',
      color: '#385e9d',
      secondary: '#2a4778',
      description: 'Vigilancia epidemiológica hospitalaria, bioestadística clínica e higiene sanitaria'
    },
    {
      label: 'Radiología y Medicina Física',
      shortLabel: 'Radiología & MF',
      value: 20,
      unit: '% de actividad',
      color: '#0284c7',
      secondary: '#0369a1',
      description: 'Diagnóstico por imagen (TC/RM/Ecografía), radiofísica hospitalaria y medicina nuclear'
    },
    {
      label: 'Medicina Legal y Forense',
      shortLabel: 'Med. Legal',
      value: 12,
      unit: '% de actividad',
      color: '#7c3aed',
      secondary: '#6d28d9',
      description: 'Tanatología, patología médico-legal, genética forense y bioderecho sanitario'
    },
    {
      label: 'Obstetricia y Ginecología',
      shortLabel: 'Ginecología',
      value: 10,
      unit: '% de actividad',
      color: '#db2777',
      secondary: '#be185d',
      description: 'Salud materno-fetal, oncología ginecológica y cirugía mínimamente invasiva'
    },
    {
      label: 'Pediatría',
      shortLabel: 'Pediatría',
      value: 5,
      unit: '% de actividad',
      color: '#16a34a',
      secondary: '#15803d',
      description: 'Neonatología avanzada, desarrollo pediátrico y nutrición infanto-juvenil'
    },
    {
      label: 'Historia de la Ciencia',
      shortLabel: 'Hist. Ciencia',
      value: 3,
      unit: '% de actividad',
      color: '#ca8a04',
      secondary: '#a16207',
      description: 'Humanidades médicas, patrimonio histórico de la Facultad de Medicina y bioética'
    }
  ];

  // Dataset 3: Convocatorias y Plazas PDI (2024 - 2026)
  const pdiData: DataPoint[] = [
    {
      label: 'Profesores Asociados de Ciencias de la Salud (CCSS)',
      shortLabel: 'Asociados CCSS',
      value: 14,
      unit: 'Plazas',
      color: '#d22020',
      secondary: '#b31616',
      description: 'Plazas G078 vinculadas a la asistencia en SACYL y docencia clínica práctica'
    },
    {
      label: 'Bolsa de Profesores Sustitutos (LOSU)',
      shortLabel: 'Sustitutos LOSU',
      value: 8,
      unit: 'Plazas',
      color: '#385e9d',
      secondary: '#2a4778',
      description: 'Radiofísica Hospitalaria, Medicina Física y Rehabilitación (Estadillos oficiales)'
    },
    {
      label: 'Contratos Predoctorales — Plan Medicina USAL',
      shortLabel: 'Predoctorales',
      value: 6,
      unit: 'Contratos',
      color: '#0d9488',
      secondary: '#0f766e',
      description: 'Plan Especial de Medicina 2023-2030 para tesis en biomedicina clínica y experimental'
    },
    {
      label: 'Profesor Permanente Laboral Vinculado',
      shortLabel: 'Permanentes Lab.',
      value: 4,
      unit: 'Concursos',
      color: '#7c3aed',
      secondary: '#6d28d9',
      description: 'Concursos de acceso PDI Laboral (2026/D/LDF/MDF/2) y actas de comisión'
    },
    {
      label: 'Resoluciones Oficiales Publicadas en BOCYL',
      shortLabel: 'BOCYL',
      value: 8,
      unit: 'Boletines',
      color: '#ea580c',
      secondary: '#c2410c',
      description: 'Boletines Oficiales de Castilla y León con resoluciones y comisiones departamentales'
    }
  ];

  const currentDataset =
    activeTab === 'ects' ? ectsData : activeTab === 'areas' ? areasDistribution : pdiData;

  const maxValue = Math.max(...currentDataset.map((d) => d.value));

  return (
    <section id="indicadores" className="py-24 bg-[var(--science-bg)] border-b border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Astro-inspired Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d22020]/8 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#385e9d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
              <TrendingUp className="w-4 h-4 text-[#d22020]" />
              <span>Observatorio Académico y Científico</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
              Indicadores Departamentales en Cifras
            </h2>
            <p className="text-lg sm:text-xl text-[#4d4d4d] leading-relaxed font-normal">
              Visualización interactiva de la carga docente oficial, distribución de la actividad investigadora y balance de las convocatorias públicas del PDI.
            </p>
          </div>

          {/* Interactive Astro-Style Segmented Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl border border-[var(--border-subtle)] shrink-0 shadow-xs">
            <button
              onClick={() => {
                setActiveTab('ects');
                setHoveredIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'ects'
                  ? 'bg-white text-[#d22020] shadow-sm'
                  : 'text-[#4d4d4d] hover:text-[#d22020]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Carga Docente ECTS</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('areas');
                setHoveredIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'areas'
                  ? 'bg-white text-[#385e9d] shadow-sm'
                  : 'text-[#4d4d4d] hover:text-[#385e9d]'
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>Especialidades (%)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('pdi');
                setHoveredIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'pdi'
                  ? 'bg-white text-[#d22020] shadow-sm'
                  : 'text-[#4d4d4d] hover:text-[#d22020]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Convocatorias PDI</span>
            </button>
          </div>
        </div>

        {/* Main Dashboard Card with Astro Card Styling */}
        <div className="bg-white rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Header of Active Metric */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#d22020] font-bold block mb-1">
                {activeTab === 'ects'
                  ? 'Matriz Curricular Universitaria'
                  : activeTab === 'areas'
                  ? 'Distribución Diagnóstica e Investigadora'
                  : 'Balance de Procesos Selectivos 2024 - 2026'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-primary)]">
                {activeTab === 'ects'
                  ? 'Créditos ECTS Impartidos por Titulación'
                  : activeTab === 'areas'
                  ? 'Peso Científico Relativo por Área de Conocimiento'
                  : 'Plazas Docentes Convocadas y Resoluciones Oficiales'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Datos Validados USAL</span>
              </span>
            </div>
          </div>

          {/* Interactive Chart Visualizer */}
          <div className="space-y-5">
            {currentDataset.map((item, index) => {
              const percentage = Math.round((item.value / maxValue) * 100);
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-4 rounded-2xl transition-all border ${
                    isHovered
                      ? 'bg-stone-50 border-[#d22020]/30 shadow-xs translate-x-1'
                      : 'bg-white border-transparent hover:bg-stone-50/60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-base sm:text-lg font-serif font-bold text-[var(--text-primary)]">
                        {item.label}
                      </span>
                      {item.highlight && (
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--usal-red-light)] text-[#d22020] border border-[#d22020]/20">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1.5 sm:text-right">
                      <span className="text-xl sm:text-2xl font-serif font-bold tabular-nums" style={{ color: item.color }}>
                        {item.value}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#4d4d4d]">
                        {item.unit}
                      </span>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-3.5 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200/80">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: item.color,
                        boxShadow: isHovered ? `0 0 12px ${item.color}60` : 'none'
                      }}
                    />
                  </div>

                  {/* Informative Subtitle */}
                  <p className="text-xs sm:text-sm text-[#4d4d4d] mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Insights Footer */}
          <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#4d4d4d]">
              <ShieldCheck className="w-5 h-5 text-[#385e9d] shrink-0" />
              <span>
                Datos conformes con las memorias de verificación ANECA y el Consejo de Departamento.
              </span>
            </div>

            <a
              href="#documentos"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#d22020] hover:text-[#b31616] hover:underline"
            >
              <span>Consultar actas y resoluciones</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

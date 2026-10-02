/**
 * Departamento de Ciencias Biomédicas y del Diagnóstico
 * Facultad de Medicina — Universidad de Salamanca (USAL)
 * Dirección Artística y Sistema Visual Científico
 */
import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Breadcrumbs } from './components/layout/Breadcrumbs';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { Hero } from './components/sections/Hero';
import { ResearchNetwork } from './components/visuals/ResearchNetwork';
import { DepartmentIntro } from './components/sections/DepartmentIntro';
import { Leadership } from './components/sections/Leadership';
import { Committees } from './components/sections/Committees';
import { AreasSection } from './components/sections/AreasSection';
import { TeachingSection } from './components/sections/TeachingSection';
import { DepartmentAnalyticsChart } from './components/sections/DepartmentAnalyticsChart';
import { DocumentsSection } from './components/sections/DocumentsSection';
import { Timeline } from './components/visuals/Timeline';
import { NewsSection } from './components/sections/NewsSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.key === 'k') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section Observer for Header and Breadcrumbs active states
  useEffect(() => {
    const sections = [
      'ecosistema',
      'departamento',
      'areas',
      'direccion',
      'comisiones',
      'docencia',
      'indicadores',
      'documentos',
      'trayectoria',
      'actualidad',
      'galeria',
      'contacto'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--science-bg)] font-sans text-[var(--text-primary)]">
      
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--usal-primary)] text-white rounded-lg shadow-lg text-xs font-semibold focus-visible:outline-2 focus-visible:outline-[var(--usal-primary)]"
      >
        Saltar al contenido principal
      </a>

      {/* Main Navigation Header: Sticky at top without artificial padding clashing */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Breadcrumb Navigation Hierarchy placed cleanly directly below Header */}
      <Breadcrumbs activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero />
        
        <div id="ecosistema">
          <ResearchNetwork />
        </div>
        
        <DepartmentIntro />
        
        <AreasSection />
        
        <Leadership />
        
        <Committees />
        
        <TeachingSection />
        
        {/* Interactive Department Analytics Chart (Astro-Style) */}
        <DepartmentAnalyticsChart />
        
        <DocumentsSection />
        
        <div id="trayectoria">
          <Timeline />
        </div>
        
        <NewsSection />
        
        <GallerySection />
        
        <ContactSection />
      </main>

      {/* University Institutional Footer */}
      <Footer />

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={(targetId) => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

    </div>
  );
}

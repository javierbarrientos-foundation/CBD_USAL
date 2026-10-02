import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building } from 'lucide-react';
import { DEPARTMENT_INFO } from '../../data/departmentData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: 'Estudiante',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[var(--science-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold uppercase tracking-wider text-[#d22020] bg-[var(--usal-red-light)] border border-[#d22020]/25 mb-4">
            <Mail className="w-4 h-4 text-[#d22020]" />
            <span>Atención Institucional y Académica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--text-primary)] font-bold tracking-tight mb-4">
            Contacto y Localización
          </h2>
          <p className="text-lg sm:text-xl text-[#4d4d4d] dark:text-stone-300 leading-relaxed font-normal">
            Póngase en contacto con la Secretaría de Dirección del Departamento de Ciencias Biomédicas y del Diagnóstico para consultas académicas, trámites docentes o colaboraciones investigadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Location Card (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 sm:p-10 shadow-xs space-y-6 glass-card-hover">
            
            <div>
              <span className="text-xs uppercase tracking-wider text-[#d22020] font-bold font-mono block mb-1.5">
                Sede Central
              </span>
              <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-2">
                Facultad de Medicina
              </h3>
              <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-stone-300 leading-relaxed">
                Departamento de Ciencias Biomédicas y del Diagnóstico<br />
                Colegio Mayor de Oviedo, Calle Alfonso X el Sabio s/n<br />
                37007 Salamanca, España
              </p>
            </div>

            <div className="pt-5 border-t border-[var(--border-subtle)] space-y-4 text-sm text-[#4d4d4d] dark:text-stone-300">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#d22020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">Ubicación física:</span>
                  <span>Campus Miguel de Unamuno, junto al Hospital Universitario de Salamanca.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#d22020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">Teléfono y centralita:</span>
                  <span className="font-mono font-semibold text-[var(--text-primary)]">{DEPARTMENT_INFO.phone}</span>
                  <span className="text-[#4d4d4d]/70 ml-2">(Extensión {DEPARTMENT_INFO.extension})</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#d22020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">Correo electrónico oficial:</span>
                  <a href={`mailto:${DEPARTMENT_INFO.email}`} className="text-[#d22020] hover:underline font-mono font-bold text-base">
                    {DEPARTMENT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#d22020] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">Horario de secretaría:</span>
                  <span>Lunes a Viernes de 09:00 a 14:00 h (días lectivos oficiales).</span>
                </div>
              </div>
            </div>

            {/* University affiliation box in #385e9d */}
            <div className="p-5 rounded-xl bg-[var(--usal-blue-light)] border border-[#385e9d]/25">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-[#385e9d]" />
                <span className="text-sm font-bold text-[#385e9d]">
                  Trámites de Matrícula y Secretaría Central
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4d4d4d] dark:text-stone-300 leading-relaxed mb-3.5">
                Para certificados académicos oficiales, expedición de títulos o convalidaciones de grado, consulte la Secretaría General de la Facultad de Medicina.
              </p>
              <a
                href={DEPARTMENT_INFO.facultadMedicinaUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-bold text-[#385e9d] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Acceder a Secretaría de Medicina</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--science-surface)] rounded-2xl border border-[var(--border-subtle)] p-8 sm:p-10 shadow-xs glass-card-hover">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-primary)] mb-2.5">
              Buzón de Consultas Departamentales
            </h3>
            <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-stone-300 mb-8 leading-relaxed">
              Remita su consulta directamente a la Secretaría de Dirección. Su mensaje será atendido en un plazo estimado de 24 a 48 horas laborables.
            </p>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-[var(--usal-red-light)] border border-[#d22020]/25 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#d22020] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Mensaje recibido con éxito
                </h4>
                <p className="text-sm sm:text-base text-[#4d4d4d] dark:text-stone-300 max-w-md mx-auto mb-6">
                  Muchas gracias por contactar con el Departamento de Ciencias Biomédicas y del Diagnóstico. Le responderemos a la dirección <strong className="font-bold text-[var(--text-primary)]">{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      affiliation: 'Estudiante',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 text-sm font-bold text-[#d22020] bg-[var(--science-surface)] border border-[#d22020]/30 rounded-xl hover:bg-[var(--usal-red-light)] transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carmen Gómez"
                      className="w-full px-4 py-2.5 text-sm bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="usuario@usal.es"
                      className="w-full px-4 py-2.5 text-sm bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Vinculación con la USAL
                    </label>
                    <select
                      value={formData.affiliation}
                      onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all"
                    >
                      <option value="Estudiante">Estudiante de Grado / Máster</option>
                      <option value="Investigador">Doctorando / Investigador</option>
                      <option value="PDI">Profesorado PDI USAL</option>
                      <option value="Externo">Profesional Sanitario / Externo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Asunto de la Consulta *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ej. Consulta sobre doctorado"
                      className="w-full px-4 py-2.5 text-sm bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                    Mensaje o Consulta Detallada *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escriba aquí los detalles de su petición..."
                    className="w-full px-4 py-2.5 text-sm bg-[var(--science-surface-soft)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#d22020] transition-all leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#d22020] hover:bg-[#b31616] active:bg-[#961212] rounded-xl transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#d22020]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a Secretaría</span>
                  </button>
                  <span className="text-xs font-mono text-[#4d4d4d]/80">
                    Confidencialidad garantizada bajo RGPD USAL.
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

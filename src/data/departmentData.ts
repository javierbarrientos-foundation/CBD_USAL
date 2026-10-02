import { DepartmentInfo, AreaOfKnowledge, Committee, DegreeProgram, DocumentItem, DepartmentNewsItem, LeadershipMember } from '../types';

export const DEPARTMENT_INFO: DepartmentInfo = {
  name: 'Departamento de Ciencias Biomédicas y del Diagnóstico',
  university: 'Universidad de Salamanca',
  faculty: 'Facultad de Medicina',
  founded: 1218,
  address: 'Colegio Mayor de Oviedo, Calle Alfonso X el Sabio s/n, 37007 Salamanca, España',
  phone: '+34 923 29 45 00',
  extension: '1817',
  email: 'dpto.cbd@usal.es',
  officialPortalUrl: 'https://cbdusal.org/',
  usalUrl: 'https://www.usal.es/',
  facultadMedicinaUrl: 'https://facultadmedicina.usal.es/',
  bocylUrl: 'https://bocyl.jcyl.es/',
  jobBoardUsalUrl: 'https://www.usal.es/bolsas-de-trabajo-pdi-departamento-de-ciencias-biomedicas-y-del-diagnostico',
  description: 'El Departamento de Ciencias Biomédicas y del Diagnóstico de la Universidad de Salamanca engloba las áreas de conocimiento de Historia de la Ciencia, Medicina Legal y Forense, Medicina Preventiva y Salud Pública, Microbiología Médica, Obstetricia y Ginecología, Pediatría y Radiología y Medicina Física, integrando investigación biomédica de vanguardia, diagnóstico clínico avanzado y docencia universitaria de excelencia en Ciencias de la Salud.'
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Prof. Dr. Ignacio Jesús Dávila González',
    role: 'Director',
    email: 'idg@usal.es',
    profileUrl: 'https://produccioncientifica.usal.es/investigadores/56394/detalle',
    photoUrl: '/images/director-ignacio-jesus.jpg',
    departmentRole: 'Director del Departamento',
    office: 'Facultad de Medicina, 2ª planta, Despacho Nº 3.33',
    credentials: 'Catedrático de Universidad. Ostenta la representación institucional del departamento y ejerce las funciones de dirección y gestión estratégica.'
  },
  {
    name: 'Prof. Dr. Raúl Velasco Morgado',
    role: 'Subdirector',
    email: 'rvmorgado@usal.es',
    profileUrl: 'https://produccioncientifica.usal.es/investigadores/57201/detalle',
    photoUrl: '/images/subdirector-raul-morgado.png',
    departmentRole: 'Subdirector del Departamento',
    office: 'Facultad de Medicina, 2ª planta, Despacho en Área de Historia de la Ciencia',
    credentials: 'Profesor Titular de Universidad. Coordina la ordenación académica, docencia y planes de estudio departamentales.'
  },
  {
    name: 'Prof. Dra. María Asunción García Sánchez',
    role: 'Secretaria',
    email: 'chonela@usal.es',
    profileUrl: 'https://produccioncientifica.usal.es/investigadores/57348/detalle',
    photoUrl: '/images/secretaria-asuncion-chaves.jpg',
    departmentRole: 'Secretaria Académica',
    office: 'Facultad de Medicina, 2ª planta, Despacho Nº 3.27',
    credentials: 'Profesora de Universidad. Responsable de la fe pública administrativa, actas, convocatorias y trámites reglamentarios del departamento.'
  }
];

export const AREAS_OF_KNOWLEDGE: AreaOfKnowledge[] = [
  {
    id: 'historia-de-la-ciencia',
    name: 'Historia de la Ciencia',
    code: '149',
    image: '/images/area-historia-ciencia.jpg',
    description: 'Estudio de la evolución histórica del pensamiento biomédico, la medicina clínica y las humanidades médicas. Investigación documental y conservación del patrimonio científico de la USAL.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/149/detalle',
    keyTopics: ['Humanidades Médicas', 'Historia de la Medicina', 'Patrimonio Científico Salmantino', 'Evolución de las Ciencias Biomédicas'],
    docencia: ['Grado en Medicina', 'Grado en Humanidades', 'Grado en Traducción e Interpretación']
  },
  {
    id: 'medicina-legal-y-forense',
    name: 'Medicina Legal y Forense',
    code: '183',
    image: '/images/area-medicina-legal.jpg',
    description: 'Ciencias forenses, tanatología, toxicología médico-legal, deontología profesional y bioderecho. Asesoramiento pericial y resolución técnica de controversias bioclínicas.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/183/detalle',
    keyTopics: ['Patología Forense', 'Genética y Toxicología Forense', 'Bioética Clínica', 'Derecho Sanitario', 'Criminología Biomédica'],
    docencia: ['Grado en Medicina', 'Grado en Criminología', 'Grado en Odontología', 'Grado en Trabajo Social']
  },
  {
    id: 'medicina-preventiva-y-salud-publica',
    name: 'Medicina Preventiva y Salud Pública',
    code: '184',
    image: '/images/area-medicina-preventiva.jpg',
    description: 'Investigación epidemiológica, vigilancia de la salud, medicina preventiva comunitaria y hospitalaria, gestión de servicios sanitarios y promoción integral de la salud.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/184/detalle',
    keyTopics: ['Epidemiología Clínica', 'Salud Pública Global', 'Medicina Preventiva', 'Higiene Hospitalaria', 'Bioestadística Sanitaria'],
    docencia: ['Grado en Medicina', 'Grado en Fisioterapia', 'Grado en Terapia Ocupacional', 'Máster en Metodología']
  },
  {
    id: 'microbiologia-medica',
    name: 'Microbiología Médica',
    code: '188',
    image: '/images/area-microbiologia.webp',
    description: 'Investigación diagnóstica y molecular en bacteriología clínica, virología, micología, parasitología, resistencia antimicrobiana y patogenia de enfermedades infecciosas emergentes.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/188/detalle',
    keyTopics: ['Resistencia Antibiótica', 'Virología Clínica', 'Enfermedades Infecciosas', 'Microbiota y Diagnóstico Molecular', 'Enfermedades Tropicales'],
    docencia: ['Grado en Medicina', 'Grado en Odontología', 'Máster en Enfermedades Tropicales']
  },
  {
    id: 'obstetricia-y-ginecologia',
    name: 'Obstetricia y Ginecología',
    code: '191',
    image: '/images/area-obstetricia-ginecologia.jpg',
    description: 'Salud integral de la mujer en todas las etapas del ciclo vital, medicina materno-fetal, oncología ginecológica, reproducción asistida y cirugía mínimamente invasiva.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/191/detalle',
    keyTopics: ['Medicina Fetal', 'Oncología Ginecológica', 'Endocrinología Reproductiva', 'Cirugía Endoscópica', 'Salud Perinatal'],
    docencia: ['Grado en Medicina', 'Programas Clínicos Hospitalarios']
  },
  {
    id: 'pediatria',
    name: 'Pediatría',
    code: '198',
    image: '/images/area-pediatria.jpg',
    description: 'Atención médica pediátrica integral desde el periodo neonatal hasta el final de la adolescencia, neonatología avanzada, desarrollo infantil, neuropediatría y nutrición infantil.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/198/detalle',
    keyTopics: ['Neonatología de Alta Precisión', 'Cardiología Pediátrica', 'Infectología Infantil', 'Neurodesarrollo', 'Nutrición y Crecimiento'],
    docencia: ['Grado en Medicina', 'Grado en Fisioterapia']
  },
  {
    id: 'radiologia-y-medicina-fisica',
    name: 'Radiología y Medicina Física',
    code: '218',
    image: '/images/area-radiologia.webp',
    description: 'Diagnóstico por imagen de alta resolución (TC, RM, Ecografía), radiología intervencionista, física médica, radiobiología, medicina física y rehabilitación funcional.',
    scientificUrl: 'https://produccioncientifica.usal.es/area/218/detalle',
    keyTopics: ['Diagnóstico por Imagen', 'Radiología Intervencionista', 'Radiofísica Hospitalaria', 'Medicina Física y Rehabilitación', 'Medicina Nuclear'],
    docencia: ['Grado en Medicina', 'Grado en Fisioterapia', 'Grado en Terapia Ocupacional']
  }
];

export const COMMITTEES: Committee[] = [
  {
    id: 'comision-permanente',
    name: 'Comisión Permanente',
    description: 'Órgano colegiado permanente de gobierno ordinario y seguimiento de la actividad académica e investigadora del departamento.',
    members: [
      { name: 'Prof. Dr. Ignacio Jesús Dávila González', role: 'Presidente (Director)', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56394/detalle' },
      { name: 'Prof. Dr. Enrique García Sánchez', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56289/detalle' },
      { name: 'Prof. Dra. Bertha Gutiérrez Rodilla', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56203/detalle' },
      { name: 'Prof. Dra. Cristina Cuesta Apausa', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/262692/detalle' },
      { name: 'Prof. Dr. Ignacio Trujillano Martín', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56397/detalle' },
      { name: 'Prof. Dr. Javier Borrajo Sánchez', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56423/detalle' },
      { name: 'Prof. Dr. José Ángel Santos Sánchez', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57702/detalle' },
      { name: 'Prof. Dr. Juan Antonio Rodríguez Sánchez', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/55892/detalle' },
      { name: 'Prof. Dr. Luis Félix Valero Juan', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56625/detalle' },
      { name: 'Prof. Dra. María Asunción García Sánchez', role: 'Secretaria', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57348/detalle' },
      { name: 'Prof. Dr. Raúl Velasco Morgado', role: 'Vocal (Subdirector)', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57201/detalle' },
      { name: 'Prof. Dra. Ana Belén Remesal Escalero', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57299/detalle' },
      { name: 'Prof. Dra. Ana María Cubo Nava', role: 'Vocal', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57927/detalle' },
      { name: 'Beatriz López Nieto', role: 'Vocal' },
      { name: 'Juan Manuel Velázquez Díaz', role: 'Vocal' },
      { name: 'Santiago Zamarreño Domínguez', role: 'Vocal' },
      { name: 'Vega María Sánchez Rodríguez', role: 'Vocal' }
    ]
  },
  {
    id: 'tribunal-de-reclamaciones',
    name: 'Comisión Tribunal de Reclamaciones',
    description: 'Órgano de garantías académicas que revisa y resuelve con rigor e imparcialidad las reclamaciones de evaluación y calificaciones.',
    members: [
      { name: 'Prof. Dr. Luis Félix Valero Juan', type: 'titular', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56625/detalle' },
      { name: 'Prof. Dr. Raúl Velasco Morgado', type: 'titular', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57201/detalle' },
      { name: 'Prof. Dra. Paloma García-Talavera San Miguel', type: 'titular', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57481/detalle' },
      { name: 'Prof. Dra. Ana Belén Remesal Escalero', type: 'suplente', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57299/detalle' },
      { name: 'Prof. Dr. Juan Muñoz Bellido', type: 'suplente', profileUrl: 'https://produccioncientifica.usal.es/investigadores/56582/detalle' },
      { name: 'Prof. Dra. Ana María Cubo Nava', type: 'suplente', profileUrl: 'https://produccioncientifica.usal.es/investigadores/57927/detalle' }
    ]
  }
];

export const DEGREE_PROGRAMS: DegreeProgram[] = [
  {
    id: 'grado-medicina',
    title: 'Grado en Medicina',
    faculty: 'Facultad de Medicina',
    type: 'Grado',
    url: 'https://facultadmedicina.usal.es/presentacion/',
    image: '/images/grado-medicina.webp',
    description: 'Formación médica clínica rigurosa, diagnóstico avanzado, microbiología clínica, medicina legal y preventiva en el Complejo Asistencial Universitario de Salamanca.',
    credits: '360 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-odontologia',
    title: 'Grado en Odontología',
    faculty: 'Facultad de Medicina',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-odontologia',
    image: '/images/grado-odontologia.jpg',
    description: 'Docencia en microbiología oral, farmacología aplicada, patología bucal, medicina legal odontológica y técnicas diagnósticas por imagen craneofacial.',
    credits: '300 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-fisioterapia',
    title: 'Grado en Fisioterapia',
    faculty: 'Facultad de Medicina',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-fisioterapia',
    image: '/images/grado-fisioterapia.jpg',
    description: 'Asignaturas de medicina física, fundamentos radiológicos, prevención de patologías osteoarticulares y rehabilitación clínica funcional.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-terapia-ocupacional',
    title: 'Grado en Terapia Ocupacional',
    faculty: 'Facultad de Medicina',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-terapia-ocupacional',
    image: '/images/grado-terapia-ocupacional.webp',
    description: 'Salud preventiva, rehabilitación física y psicosocial, afecciones médico-quirúrgicas y autonomía en la comunidad.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-criminologia',
    title: 'Grado en Criminología',
    faculty: 'Facultad de Derecho / USAL',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-criminologia',
    image: '/images/grado-criminologia.jpg',
    description: 'Medicina legal, patología forense, tanatología, toxicología de drogas y sustancias psicoactivas e identificación de restos.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-trabajo-social',
    title: 'Grado en Trabajo Social',
    faculty: 'Facultad de Ciencias Sociales',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-trabajo-social',
    image: '/images/grado-trabajo-social.jpg',
    description: 'Bases sociosanitarias, medicina preventiva, epidemiología de las desigualdades en salud y programas comunitarios de prevención.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-humanidades',
    title: 'Grado en Humanidades',
    faculty: 'Facultad de Filosofía',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-humanidades',
    image: '/images/grado-humanidades.jpg',
    description: 'Historia de la ciencia, pensamiento médico en el Renacimiento salmantino y su proyección humanística universal.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'grado-traduccion',
    title: 'Grado en Traducción e Interpretación',
    faculty: 'Facultad de Traducción y Documentación',
    type: 'Grado',
    url: 'https://www.usal.es/grado-en-traduccion-e-interpretacion',
    image: '/images/grado-traduccion.jpg',
    description: 'Especialización en terminología médica, traducción biomédica científica y lenguaje biomédico de rigor internacional.',
    credits: '240 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'master-enfermedades-tropicales',
    title: 'Máster Universitario en Enfermedades Tropicales',
    faculty: 'CIETUS / Universidad de Salamanca',
    type: 'Máster',
    url: 'http://www.cietus.es/es/MASTER-ASIGNATURAS/',
    image: '/images/fluorescencia.jpg',
    description: 'Programa oficial de posgrado orientado a la formación avanzada en diagnóstico, patogenia, terapéutica y control epidemiológico de las enfermedades infecciosas y parasitarias tropicales.',
    credits: '60 ECTS',
    modality: 'Presencial / Semipresencial'
  },
  {
    id: 'mfp-metodologia-investigacion',
    title: 'Máster de Formación Permanente en Metodología de la Investigación en Ciencias de la Salud',
    faculty: 'Universidad de Salamanca (Virtual)',
    type: 'Título Propio',
    url: 'https://www.usal.es/master-en-metodologia-de-la-investigacion-en-ciencias-de-la-salud-online',
    image: '/images/laboratorio-serie.jpg',
    description: 'Programa formativo de excelencia en diseño de estudios epidemiológicos, bioestadística avanzada, lectura crítica de literatura médica y redacción científica.',
    credits: '60 ECTS',
    modality: 'Online / Virtual'
  },
  {
    id: 'master-agua',
    title: 'Máster en Ciencia, Tecnología y Gestión del Agua',
    faculty: 'Fundación General USAL / Transferencia',
    type: 'Máster',
    url: 'https://transferencia.usal.es/master-en-ciencia-tecnologia-y-gestion-del-agua/',
    image: '/images/science-banner.jpg',
    description: 'Módulos sanitarios de microbiología del agua, toxicología ambiental y prevención epidemiológica del agua de consumo y residual.',
    credits: '60 ECTS',
    modality: 'Presencial'
  },
  {
    id: 'doctorado-biomedicina',
    title: 'Programa de Doctorado en Biomedicina Clínica y Experimental. Salud, Enfermedad y Sociedad',
    faculty: 'Facultad de Medicina / Escuela de Doctorado USAL',
    type: 'Doctorado',
    url: 'https://cbdusal.org/#doctorado',
    image: '/images/doctorado-biomedicina.jpg',
    description: 'Máximo grado académico de investigación biomédica de la Universidad de Salamanca. Integra líneas pioneras de investigación clínica, molecular, forense y de salud pública.',
    ructCode: '5601568',
    coordinator: 'Prof. Dr. Jesús María Hernández Rivas',
    modality: 'Doctorado Oficial R.D. 99/2011'
  }
];

export const OFFICIAL_DOCUMENTS: DocumentItem[] = [
  // 1. REGLAMENTO
  {
    id: 'reglamento-interno-2018',
    title: 'Reglamento de Régimen Interno del Departamento de Ciencias Biomédicas y del Diagnóstico',
    category: 'reglamento',
    categoryLabel: 'Reglamento Interno',
    date: 'Aprobado Consejo 2018',
    url: 'https://cbdusal.org/wp-content/uploads/2023/03/reglamento-2018.pdf',
    fileType: 'PDF',
    isImportant: true
  },

  // 2. CONVOCATORIAS Y AYUDAS (Incluye los nuevos de Octubre 2026)
  {
    id: 'ejecucion-acuerdo-2026',
    title: 'Ejecución de Acuerdo — Convocatorias Departamentales CBD',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias y Acuerdos',
    date: '01 de Octubre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/ejecucion-de-acuerdo.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'ejecucion-acuerdo-copia-2026',
    title: 'Ejecución de Acuerdo (Copia Oficial Registrada)',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias y Acuerdos',
    date: '01 de Octubre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/ejecucion-de-acuerdo-1.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'predoctoral-plan-medicina-2025',
    title: 'Convocatoria 2025 Ayudas para Contrato Predoctoral — Plan Especial de Medicina 2023-2030 USAL',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias y Ayudas',
    date: 'Octubre 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/10/convocatoria-2025-contratos-predoctorales-plan-de-medicina-firm-1.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'urgencia-medicina-preventiva-bases',
    title: 'Bases de Convocatoria por Vía de Urgencia — Área de Medicina Preventiva y Salud Pública',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias de Urgencia',
    date: 'Septiembre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/bases-conv_via-urgencia_medicina-preventiva.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'urgencia-medicina-preventiva-anexo',
    title: 'Modificación Anexo II: Comisiones de Selección — Vía de Urgencia Medicina Preventiva',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias de Urgencia',
    date: 'Septiembre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/mod_anexo-ii-comisiones-de-seleccion_medprev.pdf',
    fileType: 'PDF'
  },
  {
    id: 'plaza-obstetricia-pdi',
    title: 'Lista Provisional de Admitidos: Plaza PDI Contratado — Área de Obstetricia y Ginecología',
    category: 'convocatorias',
    categoryLabel: 'Listados PDI',
    date: 'Octubre 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/10/lista-provisional_admitidos-plaza-pdi-contratado-obstreticia-y-ginecologia.pdf',
    fileType: 'PDF'
  },
  {
    id: 'resolucion-28-mayo-2025',
    title: 'Resolución 28 de Mayo de 2025 — Medicina Legal Provisional Web G078 DB7805',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias y Resoluciones',
    date: 'Mayo 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/05/medicina-legal.-provisional-web-g078-db7805.pdf',
    fileType: 'PDF'
  },
  {
    id: 'resolucion-25-marzo-2025',
    title: 'Resolución de Martes 25 de Marzo de 2025 — Convocatoria Plazas PDI',
    category: 'convocatorias',
    categoryLabel: 'Convocatorias y Resoluciones',
    date: 'Marzo 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/04/bocyl-d-19032025-15.pdf',
    fileType: 'PDF'
  },
  {
    id: 'programa-jornada-medicina-nuclear',
    title: 'Programa Científico Oficial — Jornada de Medicina Nuclear Universidad de Salamanca',
    category: 'convocatorias',
    categoryLabel: 'Jornadas y Eventos',
    date: 'Marzo 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/programa.pdf',
    fileType: 'PDF'
  },

  // 3. BOLSA DE TRABAJO Y PDI LABORAL
  {
    id: 'bolsa-pdi-modelo-1',
    title: 'Bolsa de Empleo | PDI Laboral — Lista Definitiva de Aspirantes Admitidos y Excluidos (Modelo 1)',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/lista_definitiva_modelo.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bolsa-pdi-modelo-2',
    title: 'Bolsa de Empleo | PDI Laboral — Lista Definitiva de Aspirantes Admitidos y Excluidos (Modelo 2)',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/lista_definitiva_modelo-2.pdf',
    fileType: 'PDF'
  },
  {
    id: 'valoracion-fisica-medica',
    title: 'Bolsa de Empleo: Valoración de Candidatos PDI Sustitutos — Física Médica (Radiofísica Hospitalaria)',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Abril 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/04/bolsa-de-empleo_fisica-medica-radiofisica-hospitalaria.pdf',
    fileType: 'PDF'
  },
  {
    id: 'valoracion-medicina-fisica',
    title: 'Bolsa de Empleo: Valoración de Candidatos PDI Sustitutos — Medicina Física y Rehabilitación',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Abril 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/04/bolsa-de-empleo_medicina-fisica-y-rehabilitacion.pdf',
    fileType: 'PDF'
  },
  {
    id: 'estadillo-sustituto-fisica-medica',
    title: 'Estadillo Bolsa de Trabajo PDI Sustituto LOSU — Física Médica (Firmada)',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/estadillo_bt_sustituto_losu_fisica-medica-firmada.pdf',
    fileType: 'PDF'
  },
  {
    id: 'estadillo-sustituto-rehabilitacion',
    title: 'Estadillo Bolsa de Trabajo PDI Sustituto LOSU — Medicina Física y Rehabilitación (Firmada)',
    category: 'bolsa_pdi',
    categoryLabel: 'Bolsa de Trabajo PDI',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/estadillo_bt_sustituto_losu_rehabilitacion-firmada.pdf',
    fileType: 'PDF'
  },

  // 4. OPOSICIONES Y CONCURSOS (BOCYL)
  {
    id: 'bocyl-correccion-25-03-2025',
    title: 'BOCYL — Corrección de Errores Oposiciones y Concursos',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '19 de Marzo de 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/04/bocyl-d-25032025.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-08-04-2025',
    title: 'BOCYL — Oposiciones y Concursos (2025DLDMD15)',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '08 de Abril de 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/04/bocyl-d-08042025-2025dldmd15.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-17-09-2025',
    title: 'BOCYL — Oposiciones y Concursos (2025DLDMD26)',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '17 de Septiembre de 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/09/bocyl-d-17092025-15_2025dldmd26.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-09-02-2026',
    title: 'BOCYL — Oposiciones y Concursos (2026DLDFMDF2)',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '09 de Febrero de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/02/bocyl-d-09022026-2026dldfmdf2.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-03-07-2026',
    title: 'BOCYL núm. 127 — Acta Oposiciones y Concursos (2026DLDFMDF12)',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '03 de Julio de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/07/bocyl-d-03072026-127-65_2026dldfmdf12.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-07-07-2026',
    title: 'BOCYL núm. 129 — Acta Oposiciones y Concursos (2026DLDFMDF14)',
    category: 'oposiciones',
    categoryLabel: 'Publicaciones BOCYL',
    date: '07 de Julio de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/07/bocyl-d-07072026-129-10_2026dldfmdf14.pdf',
    fileType: 'PDF'
  },

  // 5. ACTAS DE COMISIONES Y PROFESORES
  {
    id: 'concurso-acceso-pdi-2026',
    title: 'Concurso de Acceso para la Contratación de PDI Laboral (2026/D/LDF/MDF/2)',
    category: 'actas',
    categoryLabel: 'Concursos y Contratación',
    date: 'Mayo 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/concurso-acceso.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'aspirantes-admitidos-excluidos-10-03-2026',
    title: 'Aspirantes Admitidos y Excluidos por Plaza — Convocatoria 2026/D/LDF/MDF/2',
    category: 'actas',
    categoryLabel: 'Listas de Aspirantes',
    date: '10 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/lista-provisional_g078_dp7803.pdf',
    fileType: 'PDF'
  },
  {
    id: 'bocyl-concurso-13-03-2026',
    title: 'Boletín Oficial de Castilla y León (BOCYL 13-03-2026) — Publicación Concurso PDI',
    category: 'actas',
    categoryLabel: 'Publicaciones BOCYL',
    date: '13 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/bocyl-d-13032026-2026dldmd2.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-modificada-final-definitiva',
    title: 'Acta de la Comisión de Selección — Profesor Asociado de Ciencias de la Salud',
    category: 'actas',
    categoryLabel: 'Actas de Selección',
    date: '10 de Septiembre de 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/acta_modificada_final_definitiva.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-asociados-ccss-ds7846',
    title: 'Actas de Asociados CC. Salud — Plaza DS7846 (Firmas)',
    category: 'actas',
    categoryLabel: 'Actas de Asociados',
    date: '10 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/06/actas_asociado_ccss_ds7846_firmas.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-asociados-ccss-nds78106',
    title: 'Actas de Asociados CC. Salud — Plaza NDS78106 (Firmas)',
    category: 'actas',
    categoryLabel: 'Actas de Asociados',
    date: '10 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/06/actas_asociado_ccss_nds78106_firmas.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-asociados-ccss-ds7842',
    title: 'Actas de Asociados CC. Salud — Plaza DS7842 (Firmas)',
    category: 'actas',
    categoryLabel: 'Actas de Asociados',
    date: '10 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/06/actas_asociado_ccss_ds7842_firmas.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-asociados-ccss-nds78107',
    title: 'Actas de Asociados CC. Salud — Plaza NDS78107 (Firmas)',
    category: 'actas',
    categoryLabel: 'Actas de Asociados',
    date: '10 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/06/actas_asociado_ccss_nds78107__con-firmas.pdf',
    fileType: 'PDF'
  },
  {
    id: 'acta-permanente-laboral-scan1',
    title: 'Acta de Comisión de Selección — Profesor Permanente Laboral Vinculado',
    category: 'actas',
    categoryLabel: 'Actas de Selección',
    date: '04 de Febrero de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/scan-1.pdf',
    fileType: 'PDF'
  },
  {
    id: 'resumen-puntuaciones-scan2',
    title: 'Segunda Prueba: Resumen de Puntuaciones Obtenidas por Candidato (BOCyL 152/2024)',
    category: 'actas',
    categoryLabel: 'Puntuaciones y Calificaciones',
    date: '06 de Agosto de 2024',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/scan-2.pdf',
    fileType: 'PDF'
  },

  // 6. LISTAS DEFINITIVAS Y COMISIONES DE SELECCIÓN G078 (Incluye los nuevos de Octubre 2026)
  {
    id: 'anexo-composicion-comisiones-2026',
    title: 'Anexo: Composición de Comisiones de Selección de Plazas Departamentales',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '01 de Octubre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/anexo.-composicion-de-comisiones-de-seleccion.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'anexo-composicion-comisiones-copia-2026',
    title: 'Anexo: Composición de Comisiones de Selección (Copia Registrada)',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '01 de Octubre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/anexo.-composicion-de-comisiones-de-seleccion-1.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'comision-seleccion-g078-dp7803',
    title: 'Composición del Órgano de Selección por Plaza — G078_DP7803',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '25 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/comision-de-seleccion-g078_dp7803.pdf',
    fileType: 'PDF'
  },
  {
    id: 'comisiones-g078-nds78101',
    title: 'Comisiones de Selección — G078_NDS78101 / 102 / 103 / 104',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: 'Noviembre 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/11/comisiones_g078nds78102_103_104-1.pdf',
    fileType: 'PDF'
  },
  {
    id: 'comision-seleccion-g078-ds7842',
    title: 'Comisión de Selección — Plaza G078_DS7842',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/comision-de-seleccion_g078_ds7842.pdf',
    fileType: 'PDF'
  },
  {
    id: 'comision-seleccion-g078-ds7846',
    title: 'Comisión de Selección — Plaza G078_DS7846',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/comision-de-seleccion_g078_ds7846.pdf',
    fileType: 'PDF'
  },
  {
    id: 'comision-seleccion-g078-nds78106',
    title: 'Comisión de Selección — Plaza G078_NDS78106',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/comision-de-seleccion_g078_nds78106.pdf',
    fileType: 'PDF'
  },
  {
    id: 'comision-seleccion-g078-nds78107',
    title: 'Comisión de Selección — Plaza G078_NDS78107',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/comision-de-seleccion_g078_nds78107.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-dp7803',
    title: 'Lista Definitiva de Aspirantes Admitidos y Excluidos — Plaza G078_DP7803',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: '25 de Marzo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/03/lista-definitiva-g078_dp7803.pdf',
    fileType: 'PDF'
  },
  {
    id: 'listas-definitivas-g078-db7806',
    title: 'Listas Definitivas — Plaza G078_DB7806',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/listas-definitivas_g078_db7806.pdf',
    fileType: 'PDF'
  },
  {
    id: 'listas-definitivas-g078-nds78101',
    title: 'Listas Definitivas — Plaza G078_NDS78101',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Junio 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/06/listas-definitivas_g078_nds78101.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-nds78102',
    title: 'Lista Definitiva — Comisión Plaza G078/NDS78102',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Noviembre 2025',
    url: 'https://cbdusal.org/wp-content/uploads/2025/11/lista_definitiva_g078_nds78102-1.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-ds7842',
    title: 'Lista Definitiva — Plaza G078_DS7842',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/lista_definitiva_g078_ds7842.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-ds7846',
    title: 'Lista Definitiva — Plaza G078_DS7846',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/lista_definitiva_g078_ds7846.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-nds78106',
    title: 'Lista Definitiva — Plaza G078_NDS78106',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/lista_definitiva_g078_nds78106.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-definitiva-g078-nds78107',
    title: 'Lista Definitiva — Plaza G078_NDS78107',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: '25 de Mayo de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/05/lista_definitiva_g078_nds78107.pdf',
    fileType: 'PDF'
  },

  // --- NUEVOS 12 DOCUMENTOS OFICIALES (OCTUBRE 2026) ---
  // Comisiones de Selección (4 documentos nuevos)
  {
    id: 'comision-seleccion-g078-dp7804',
    title: 'Comisión de Selección — Plaza G078_DP7804',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/comision-de-seleccion_g078_dp7804.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'comision-seleccion-g078-dp7806',
    title: 'Comisión de Selección — Plaza G078_DP7806',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/comision-de-seleccion_g078dp7806.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'comisiones-seleccion-g078-ds7804-ds7855',
    title: 'Comisiones de Selección — Plazas G078_DS7804 y G078_DS7855',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/comisiones-de-seleccion_g078_ds7804-g078_ds7855.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'comisiones-seleccion-g078-nds78111-15',
    title: 'Comisiones de Selección — Plazas G078_NDS78111 a NDS78115',
    category: 'listas_g078',
    categoryLabel: 'Comisiones de Selección G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/comisiones-de-seleccion_g078_nds78111_12_13_14_15.pdf',
    fileType: 'PDF',
    isImportant: true
  },

  // Listas Definitivas de Admitidos y Excluidos (8 documentos nuevos)
  {
    id: 'lista-definitiva-g078-dp7804',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_DP7804',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078_dp7804.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078-dp7806',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_DP7806',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078_dp7806.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078-ds7804',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_DS7804',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g78_ds7804.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078-ds7855',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_DS7855',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_-g078_ds7855.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078nds78111',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_NDS78111',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078nds78111.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078nds78113',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_NDS78113',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078nds78113.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078nds78114',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_NDS78114',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078_nds78114.pdf',
    fileType: 'PDF',
    isImportant: true
  },
  {
    id: 'lista-definitiva-g078nds78115',
    title: 'Lista Definitiva de Admitidos y Excluidos — Plaza G078_NDS78115',
    category: 'listas_g078',
    categoryLabel: 'Listas Definitivas G078',
    date: 'Octubre 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/10/lista_definitiva_g078_nds78115.pdf',
    fileType: 'PDF',
    isImportant: true
  },

  // 7. LISTAS PROVISIONALES
  {
    id: 'lista-provisional-g078nds78115',
    title: 'Lista Provisional — Plaza G078NDS78115',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_-g078nds78115.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078dp7804',
    title: 'Lista Provisional — Plaza G078_DP7804',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078_dp7804.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078ds7855',
    title: 'Lista Provisional — Plaza G078DS7855',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078ds7855.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078nds78111',
    title: 'Lista Provisional — Plaza G078NDS78111',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078nds78111.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078nds78112',
    title: 'Lista Provisional — Plaza G078NDS78112',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078nds78112.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078nds78113',
    title: 'Lista Provisional — Plaza G078NDS78113',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078nds78113.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078nds78114',
    title: 'Lista Provisional — Plaza G078NDS78114',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisional_g078nds78114.pdf',
    fileType: 'PDF'
  },
  {
    id: 'lista-provisional-g078dp7806',
    title: 'Lista Provisional — Plaza G078_DP7806',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/lista_provisionall_g078_dp7806.pdf',
    fileType: 'PDF'
  },
  {
    id: 'listas-provisionales-admitidos-excluidos-general',
    title: 'Listas Provisionales de Admitidos y Excluidos (Convocatoria General)',
    category: 'listas_provisionales',
    categoryLabel: 'Listas Provisionales',
    date: '09 de Septiembre de 2026',
    url: 'https://cbdusal.org/wp-content/uploads/2026/09/listas-provionales-admitidos-y-excluidos.pdf',
    fileType: 'PDF'
  }
];

export const DEPARTMENT_NEWS: DepartmentNewsItem[] = [
  {
    id: 'jornada-medicina-nuclear-2026',
    title: 'Jornada de Medicina Nuclear — Universidad de Salamanca',
    date: 'Marzo 2026',
    category: 'Científica e Institucional',
    summary: 'Encuentro interdisciplinar con especialistas en diagnóstico por imagen médica, radiofármacos y avances clínicos en medicina nuclear organizado con la participación del Departamento.',
    pdfUrl: 'https://cbdusal.org/wp-content/uploads/2026/03/programa.pdf',
    image: '/images/area-radiologia.webp'
  },
  {
    id: 'ejecucion-acuerdos-octubre-2026',
    title: 'Ejecución de Acuerdos y Composición de Comisiones de Selección',
    date: '01 de Octubre de 2026',
    category: 'Oficial Departamental',
    summary: 'Publicación de la Ejecución de Acuerdos departamentales y los anexos normativos de composición de comisiones de selección de plazas docentes e investigadoras.',
    pdfUrl: 'https://cbdusal.org/wp-content/uploads/2026/10/ejecucion-de-acuerdo.pdf',
    image: '/images/facultad-medicina-37.webp'
  },
  {
    id: 'convocatorias-pdi-2026',
    title: 'Convocatoria de Plazas PDI y Listas Provisionales Concurso 2026',
    date: 'Septiembre 2026',
    category: 'Académica y RRHH',
    summary: 'Publicación oficial en el BOCYL y portal departamental de las listas de admitidos y excluidos para plazas de profesorado contratado y permanente laboral.',
    pdfUrl: 'https://cbdusal.org/wp-content/uploads/2026/09/bases-conv_via-urgencia_medicina-preventiva.pdf',
    image: '/images/facultad-medicina-38.webp'
  },
  {
    id: 'contratos-predoctorales-plan-medicina',
    title: 'Ayudas para Contratos Predoctorales — Plan Especial de Medicina USAL',
    date: '2025 - 2026',
    category: 'Investigación Biomédica',
    summary: 'Financiación predoctoral estratégica dentro del marco del Plan Especial de Medicina 2023-2030 para tesis en biomedicina clínica, experimental y diagnóstico.',
    pdfUrl: 'https://cbdusal.org/wp-content/uploads/2025/10/convocatoria-2025-contratos-predoctorales-plan-de-medicina-firm-1.pdf',
    image: '/images/microscopio.jpg'
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'Facultad de Medicina — Pabellón Docente y Departamental',
    subtitle: 'Campus Miguel de Unamuno, Salamanca',
    image: '/images/facultad-medicina-38.webp',
    category: 'Instalaciones Institucionales'
  },
  {
    title: 'Microscopía y Diagnóstico Biomédico de Precisión',
    subtitle: 'Laboratorios de Microbiología y Patología',
    image: '/images/microscopio.jpg',
    category: 'Laboratorio de Investigación'
  },
  {
    title: 'Inmunofluorescencia y Detección Molecular',
    subtitle: 'Área de Microbiología Médica y Biomedicina',
    image: '/images/fluorescencia.jpg',
    category: 'Investigación Molecular'
  },
  {
    title: 'Instalaciones Académicas de la Facultad de Medicina',
    subtitle: 'Universidad de Salamanca',
    image: '/images/facultad-medicina-37.webp',
    category: 'Campus Universitario'
  },
  {
    title: 'Instrumentación Analítica y Bancos de Ensayos',
    subtitle: 'Investigación Biomédica Aplicada',
    image: '/images/laboratorio-serie.jpg',
    category: 'Equipamiento Científico'
  },
  {
    title: 'Programa de Doctorado en Biomedicina',
    subtitle: 'Salud, Enfermedad y Sociedad (RUCT 5601568)',
    image: '/images/doctorado-biomedicina.jpg',
    category: 'Estudios de Posgrado'
  }
];

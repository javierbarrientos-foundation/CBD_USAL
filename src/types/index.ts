export interface LeadershipMember {
  name: string;
  role: 'Director' | 'Subdirector' | 'Secretaria';
  email: string;
  profileUrl: string;
  photoUrl: string;
  departmentRole: string;
  credentials: string;
  office?: string;
}

export interface DepartmentInfo {
  name: string;
  university: string;
  faculty: string;
  founded: number;
  address: string;
  phone: string;
  extension: string;
  email: string;
  officialPortalUrl: string;
  usalUrl: string;
  facultadMedicinaUrl: string;
  bocylUrl: string;
  jobBoardUsalUrl: string;
  description: string;
}

export interface AreaOfKnowledge {
  id: string;
  name: string;
  code: string;
  image: string;
  description: string;
  scientificUrl: string;
  keyTopics: string[];
  docencia: string[];
}

export interface CommitteeMember {
  name: string;
  role?: string;
  type?: 'titular' | 'suplente';
  profileUrl?: string;
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  members: CommitteeMember[];
}

export interface DegreeProgram {
  id: string;
  title: string;
  faculty: string;
  type: 'Grado' | 'Máster' | 'Doctorado' | 'Título Propio';
  url: string;
  image: string;
  description: string;
  credits?: string;
  modality?: string;
  ructCode?: string;
  coordinator?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: 'bolsa_pdi' | 'convocatorias' | 'oposiciones' | 'actas' | 'reglamento' | 'listas_g078' | 'listas_provisionales';
  categoryLabel: string;
  date?: string;
  url: string;
  fileType: string;
  isImportant?: boolean;
}

export interface DepartmentNewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  url?: string;
  pdfUrl?: string;
  image?: string;
}

export interface DepartmentStats {
  areasCount: number;
  degreeProgramsCount: number;
  officialRuctedDoctorate: boolean;
  foundedUniversityYear: number;
}

import { UserRole } from './roles.model';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobSeekerProfile extends User {
  contactInfo?: {
    phone?: string;
    address?: string;
  };
  resumeURL?: string;
  skills: string[];
  experience: string[];
  education: string[];
  certifications: string[];
  portfolioURL?: string;
}

export interface EmployerProfile extends User {
  companyName: string;
  companyDescription?: string;
  companyLogoURL?: string;
  companyWebsite?: string;
  jobPostings: string[]; // Array of job posting IDs
  contactInfo?: {
    phone?: string;
    address?: string;
    email?: string;
  };
}

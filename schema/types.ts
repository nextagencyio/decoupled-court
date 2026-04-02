// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeDivision {
  id: string;
  body: { value: string; summary?: string };
  chiefJudge: string;
  divisionType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  phone: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredResourcesTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeJudge {
  id: string;
  appointedDate: { time: string };
  body: { value: string; summary?: string };
  chambers: string;
  division: any[];
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeResource {
  id: string;
  body: { value: string; summary?: string };
  fileUrl: string;
  image: { url: string; alt: string; width: number; height: number };
  lastUpdated: { time: string };
  path: string;
  resourceType: any[];
  title: string;
}

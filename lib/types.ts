// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredResourcesTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Judge
export interface DrupalJudge extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  position?: string
  division?: DrupalTerm[]
  chambers?: string
  phone?: string
  photo?: DrupalImage
  appointedDate?: {
    timestamp: number
  }
}

export interface JudgesData {
  nodeJudges: {
    nodes: DrupalJudge[]
  }
}

// Division
export interface DrupalDivision extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  chiefJudge?: string
  location?: string
  phone?: string
  divisionType?: DrupalTerm[]
  image?: DrupalImage
}

export interface DivisionsData {
  nodeDivisions: {
    nodes: DrupalDivision[]
  }
}

// Resource
export interface DrupalResource extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  resourceType?: DrupalTerm[]
  fileUrl?: string
  lastUpdated?: {
    timestamp: number
  }
  image?: DrupalImage
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

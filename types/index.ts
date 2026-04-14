export interface Job {
  id: string
  title: string
  company: string
  companyId: string
  companyLogo: string
  location: string
  remote: boolean
  hybrid: boolean
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  salary: {
    min: number
    max: number
    currency: string
  }
  stack: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  postedAt: string
  featured: boolean
  applicants: number
}

export interface Company {
  id: string
  name: string
  logo: string
  website: string
  industry: string
  size: string
  location: string
  description: string
  openRoles: number
  stack: string[]
  founded: number
  featured: boolean
}

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'all'
export type LocationType = 'remote' | 'hybrid' | 'onsite' | 'all'

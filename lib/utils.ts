import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Job } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSalary(min: number, max: number): string {
  const fmt = (n: number) => (n >= 1000 ? `$${Math.round(n / 1000)}k` : `$${n}`)
  return `${fmt(min)} – ${fmt(max)}`
}

export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return `${Math.floor(diffDays / 30)}mo ago`
}

export function filterJobs(
  jobs: Job[],
  {
    search = '',
    stack = [] as string[],
    location = '',
    type = '',
    remote = false,
  } = {}
): Job[] {
  return jobs.filter((job) => {
    const q = search.toLowerCase()
    const matchSearch =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      job.stack.some((t) => t.toLowerCase().includes(q))
    const matchStack =
      stack.length === 0 || stack.some((t) => job.stack.includes(t))
    const matchLocation =
      !location ||
      job.location.toLowerCase().includes(location.toLowerCase()) ||
      (location.toLowerCase() === 'remote' && job.remote)
    const matchType = !type || job.type === type
    const matchRemote = !remote || job.remote
    return matchSearch && matchStack && matchLocation && matchType && matchRemote
  })
}

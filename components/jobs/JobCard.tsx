import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, DollarSign, Star, Users } from 'lucide-react'
import { Job } from '@/types'

interface JobCardProps {
  job: Job
  compact?: boolean
}

const typeColors: Record<string, string> = {
  'full-time': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'part-time': 'bg-blue-50 text-blue-700 border-blue-100',
  contract: 'bg-orange-50 text-orange-700 border-orange-100',
  internship: 'bg-purple-50 text-purple-700 border-purple-100',
}

function formatSalary(min: number, max: number, currency: string): string {
  const fmt = (n: number) => {
    if (n >= 1000) return `$${(n / 1000).toFixed(0)}k`
    return `$${n}`
  }
  return `${fmt(min)} – ${fmt(max)}`
}

export default function JobCard({ job, compact = false }: JobCardProps) {
  const locationLabel = job.remote
    ? 'Remote'
    : job.hybrid
    ? `${job.location} · Hybrid`
    : job.location

  return (
    <Link href={`/jobs/${job.id}`} className="block group">
      <article
        className={`bg-white border rounded-2xl p-5 card-hover ${
          job.featured
            ? 'border-brand-200 shadow-sm shadow-brand-100'
            : 'border-gray-100'
        }`}
      >
        {/* Featured badge */}
        {job.featured && (
          <div className="flex items-center gap-1 text-xs font-semibold text-brand-600 mb-3">
            <Star className="w-3 h-3 fill-brand-600" />
            Featured
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Company logo */}
          <div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden shrink-0 flex items-center justify-center">
            <Image
              src={job.companyLogo}
              alt={job.company}
              width={48}
              height={48}
              className="object-contain w-10 h-10"
              onError={() => {}}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-600 transition-colors truncate">
                {job.title}
              </h3>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${
                  typeColors[job.type]
                }`}
              >
                {job.type.replace('-', ' ')}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-3">{job.company}</p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {locationLabel}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                {formatSalary(job.salary.min, job.salary.max, job.salary.currency)}
              </span>
              {!compact && (
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {job.applicants} applicants
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDate(job.postedAt)}
              </span>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {job.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {job.stack.length > 5 && (
                <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-xs font-medium rounded-md">
                  +{job.stack.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return `${Math.floor(diffDays / 30)}mo ago`
}

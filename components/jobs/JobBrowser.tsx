'use client'

import { useState, useMemo } from 'react'
import { Search, MapPin, Briefcase, DollarSign, Clock, Star, Users, X, SlidersHorizontal } from 'lucide-react'
import { Job } from '@/types'
import { jobs } from '@/data/jobs'

const TECH_FILTERS = [
  'React', 'TypeScript', 'Python', 'Go', 'Rust',
  'Node.js', 'Kubernetes', 'Swift', 'GraphQL', 'PostgreSQL',
]

const TYPE_LABELS: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'contract': 'Contract',
  'internship': 'Internship',
}

function formatSalary(job: Job): string {
  const k = (n: number) => `$${Math.round(n / 1000)}k`
  return `${k(job.salary.min)} – ${k(job.salary.max)}`
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return '1 day ago'
  if (days < 7) return `${days} days ago`
  if (days < 14) return '1 week ago'
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}

function locationLabel(job: Job): string {
  if (job.remote && !job.hybrid) return 'Remote'
  if (job.hybrid) return `${job.location} · Hybrid`
  return job.location
}

export default function JobBrowser() {
  const [search, setSearch] = useState('')
  const [activeTech, setActiveTech] = useState<string | null>(null)
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      if (remoteOnly && !job.remote) return false

      if (activeTech) {
        const matched = job.stack.some(
          (s) => s.toLowerCase().includes(activeTech.toLowerCase())
        )
        if (!matched) return false
      }

      if (search) {
        const q = search.toLowerCase()
        return (
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.stack.some((s) => s.toLowerCase().includes(q)) ||
          job.location.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q)
        )
      }

      return true
    })
  }, [search, activeTech, remoteOnly])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function toggleTech(t: string) {
    setActiveTech((prev) => (prev === t ? null : t))
    setVisibleCount(6)
  }

  function handleSearch(v: string) {
    setSearch(v)
    setVisibleCount(6)
  }

  return (
    <>
      {/* Search bar */}
      <div
        className="flex flex-col sm:flex-row gap-3 mb-6 p-3 rounded-xl"
        style={{ backgroundColor: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex-1 flex items-center gap-3 px-3">
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Job title, skill, or company..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
          />
          {search && (
            <button onClick={() => handleSearch('')} className="text-gray-600 hover:text-gray-400">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="hidden sm:block w-px bg-white/10 self-stretch my-1" />
        <div className="flex items-center gap-3 px-3">
          <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
          <span className="flex-1 sm:w-36 text-sm text-gray-500">San Francisco + Remote</span>
        </div>
        <button className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors">
          Search
        </button>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {/* Remote toggle */}
        <button
          onClick={() => { setRemoteOnly(!remoteOnly); setVisibleCount(6) }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
          style={{
            backgroundColor: remoteOnly ? 'rgba(124,58,237,0.2)' : 'transparent',
            border: remoteOnly ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.1)',
            color: remoteOnly ? '#a78bfa' : '#9ca3af',
          }}
        >
          <SlidersHorizontal className="w-3 h-3" />
          Remote only
        </button>

        <div className="w-px h-4 bg-white/10" />

        {/* Tech pills */}
        {TECH_FILTERS.map((tech) => {
          const active = activeTech === tech
          return (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
              style={{
                backgroundColor: active ? 'rgba(124,58,237,0.2)' : 'transparent',
                border: active ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.1)',
                color: active ? '#a78bfa' : '#9ca3af',
              }}
            >
              {tech}
            </button>
          )
        })}

        {/* Clear all filters */}
        {(activeTech || remoteOnly || search) && (
          <button
            onClick={() => { setActiveTech(null); setRemoteOnly(false); handleSearch('') }}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-400/70 hover:text-red-400 rounded-full transition-colors"
            style={{ border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-gray-400 text-sm mb-6">
        {filtered.length === jobs.length ? (
          <>
            Showing <span className="text-white font-semibold">{visible.length}</span> of{' '}
            <span className="text-violet-400 font-semibold">{jobs.length}</span> jobs
          </>
        ) : (
          <>
            <span className="text-white font-semibold">{filtered.length}</span> jobs match your filters
          </>
        )}
      </p>

      {/* No results */}
      {filtered.length === 0 && (
        <div
          className="flex flex-col items-center justify-center py-16 rounded-2xl text-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.08)' }}
        >
          <Search className="w-10 h-10 text-gray-700 mb-3" />
          <p className="text-white font-semibold mb-1">No jobs found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
          <button
            onClick={() => { setActiveTech(null); setRemoteOnly(false); handleSearch('') }}
            className="mt-4 text-violet-400 text-sm hover:text-violet-300 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Job cards */}
      {filtered.length > 0 && (
        <div className="space-y-4">
          {visible.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((n) => n + 6)}
            className="px-8 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Load {Math.min(6, filtered.length - visibleCount)} more jobs
          </button>
        </div>
      )}
    </>
  )
}

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="rounded-xl transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: job.featured ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.02)',
        border: job.featured
          ? '1px solid rgba(124,58,237,0.3)'
          : '1px solid rgba(255,255,255,0.06)',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        {job.featured && (
          <div className="flex items-center gap-1 text-xs font-semibold text-violet-400 mb-3">
            <Star className="w-3 h-3 fill-violet-400" />
            Featured
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white overflow-hidden"
              style={{ backgroundColor: 'rgba(124,58,237,0.3)' }}
            >
              {job.company[0]}
            </div>

            <div>
              <h3 className="text-white font-semibold text-base hover:text-violet-400 transition-colors mb-0.5">
                {job.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{job.company}</p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {locationLabel(job)}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  {formatSalary(job)}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  {TYPE_LABELS[job.type] ?? job.type}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {timeAgo(job.postedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {job.applicants} applicants
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:justify-end sm:shrink-0">
            {job.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-gray-400 rounded-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {expanded && (
        <div
          className="px-5 pb-5 pt-0 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-gray-400 text-sm mt-4 mb-4 leading-relaxed">{job.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Responsibilities</h4>
              <ul className="space-y-1">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="text-gray-400 text-xs flex gap-2">
                    <span className="text-violet-400 shrink-0">·</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Requirements</h4>
              <ul className="space-y-1">
                {job.requirements.map((r, i) => (
                  <li key={i} className="text-gray-400 text-xs flex gap-2">
                    <span className="text-violet-400 shrink-0">·</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-violet-300 rounded-md"
                style={{ backgroundColor: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)' }}
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors"
            style={{ backgroundColor: '#7C3AED' }}
            onClick={(e) => { e.stopPropagation(); alert('Sign in to apply!') }}
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  )
}

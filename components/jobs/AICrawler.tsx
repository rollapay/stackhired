'use client'

import { useState } from 'react'
import { Sparkles, MapPin, DollarSign, Briefcase, Clock, RefreshCw, AlertCircle } from 'lucide-react'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  stack: string[]
  posted: string
  featured: boolean
  description: string
}

type CrawlerState = 'idle' | 'crawling' | 'done' | 'error'

export default function AICrawler() {
  const [state, setState] = useState<CrawlerState>('idle')
  const [jobs, setJobs] = useState<Job[]>([])
  const [error, setError] = useState<string | null>(null)

  async function crawl() {
    setState('crawling')
    setJobs([])
    setError(null)

    try {
      const response = await fetch('/api/crawl-jobs', { method: 'POST' })

      if (!response.ok || !response.body) {
        throw new Error('Failed to connect to AI crawler')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let remainder = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = remainder + decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')
        remainder = lines.pop() ?? ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed) continue

          try {
            const parsed = JSON.parse(trimmed)

            if (parsed.error) {
              setError(parsed.error)
              setState('error')
              return
            }

            setJobs((prev) => [...prev, parsed as Job])
          } catch {
            // skip malformed lines
          }
        }
      }

      setState('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  return (
    <section className="mt-16 mb-8">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-violet-600/30 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            </div>
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
              AI-Powered
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Live SF Tech Jobs
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Claude AI crawls the market and surfaces real-time openings in San Francisco
          </p>
        </div>

        <button
          onClick={crawl}
          disabled={state === 'crawling'}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
          style={{
            background:
              state === 'crawling'
                ? 'rgba(124,58,237,0.4)'
                : 'linear-gradient(135deg, #6d28d9, #7c3aed)',
            border: '1px solid rgba(124,58,237,0.4)',
          }}
        >
          {state === 'crawling' ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Crawling…
            </>
          ) : state === 'done' || state === 'error' ? (
            <>
              <RefreshCw className="w-4 h-4" />
              Refresh Jobs
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Crawl SF Jobs
            </>
          )}
        </button>
      </div>

      {/* Error state */}
      {state === 'error' && error && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl mb-6"
          style={{
            backgroundColor: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.25)',
          }}
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 text-sm font-semibold">Crawler failed</p>
            <p className="text-red-400/70 text-xs mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Idle / empty state */}
      {state === 'idle' && (
        <div
          className="flex flex-col items-center justify-center py-16 rounded-2xl text-center"
          style={{
            backgroundColor: 'rgba(124,58,237,0.04)',
            border: '1px dashed rgba(124,58,237,0.2)',
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-violet-900/40 flex items-center justify-center mb-4">
            <Sparkles className="w-7 h-7 text-violet-400" />
          </div>
          <p className="text-white font-semibold mb-1">Ready to crawl</p>
          <p className="text-gray-500 text-sm max-w-xs">
            Click &ldquo;Crawl SF Jobs&rdquo; to let Claude AI find the latest tech openings in San Francisco
          </p>
        </div>
      )}

      {/* Skeleton loaders while crawling (before first job arrives) */}
      {state === 'crawling' && jobs.length === 0 && (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl p-5 animate-pulse"
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-white/10 rounded w-48" />
                  <div className="h-3 bg-white/10 rounded w-32" />
                  <div className="h-3 bg-white/10 rounded w-64 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Job cards */}
      {jobs.length > 0 && (
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <JobCard key={`${job.id}-${idx}`} job={job} />
          ))}

          {state === 'crawling' && (
            <div
              className="rounded-xl p-5 animate-pulse"
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-white/10 rounded w-40" />
                  <div className="h-3 bg-white/10 rounded w-28" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Done state footer */}
      {state === 'done' && jobs.length > 0 && (
        <p className="text-center text-xs text-gray-600 mt-6">
          <span className="text-violet-400 font-semibold">{jobs.length} jobs</span> found by Claude AI ·{' '}
          <button onClick={crawl} className="text-gray-500 hover:text-gray-400 transition-colors underline underline-offset-2">
            Refresh
          </button>
        </p>
      )}
    </section>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <div
      className="group rounded-xl p-5 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
      style={{
        backgroundColor: job.featured ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.02)',
        border: job.featured
          ? '1px solid rgba(124,58,237,0.3)'
          : '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {job.featured && (
        <div className="flex items-center gap-1 text-xs font-semibold text-violet-400 mb-3">
          <Sparkles className="w-3 h-3" />
          AI Featured
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex items-start gap-4">
          {/* Company initial */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white"
            style={{ backgroundColor: 'rgba(124,58,237,0.3)' }}
          >
            {job.company[0]}
          </div>

          <div className="min-w-0">
            <h3 className="text-white font-semibold text-base group-hover:text-violet-400 transition-colors mb-0.5">
              {job.title}
            </h3>
            <p className="text-gray-400 text-sm mb-1">{job.company}</p>
            {job.description && (
              <p className="text-gray-500 text-xs mb-2 line-clamp-2">{job.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {job.posted}
              </span>
            </div>
          </div>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 sm:justify-end sm:shrink-0">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs text-violet-300 rounded-md"
              style={{
                backgroundColor: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.25)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

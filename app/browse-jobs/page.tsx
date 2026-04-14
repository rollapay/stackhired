import type { Metadata } from 'next'
import { Search, MapPin, Briefcase, DollarSign, Clock, Star } from 'lucide-react'
import AICrawler from '@/components/jobs/AICrawler'

export const metadata: Metadata = {
  title: 'Browse Jobs',
  description: 'Explore thousands of tech job openings at top companies. Filter by stack, location, salary, and more.',
}

const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Vercel',
    location: 'Remote',
    salary: '$150k – $200k',
    type: 'Full-time',
    stack: ['Next.js', 'TypeScript', 'React'],
    posted: '2 days ago',
    featured: true,
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$160k – $220k',
    type: 'Full-time',
    stack: ['Python', 'PyTorch', 'Kafka'],
    posted: '3 days ago',
    featured: true,
  },
  {
    id: 3,
    title: 'Backend Engineer (Go)',
    company: 'Linear',
    location: 'Remote',
    salary: '$130k – $175k',
    type: 'Full-time',
    stack: ['Go', 'PostgreSQL', 'GraphQL'],
    posted: '5 days ago',
    featured: false,
  },
  {
    id: 4,
    title: 'DevOps / Platform Engineer',
    company: 'Supabase',
    location: 'Remote',
    salary: '$140k – $185k',
    type: 'Full-time',
    stack: ['Kubernetes', 'Terraform', 'Go'],
    posted: '1 week ago',
    featured: false,
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    company: 'Figma',
    location: 'New York, NY · Hybrid',
    salary: '$145k – $190k',
    type: 'Full-time',
    stack: ['TypeScript', 'React', 'Node.js'],
    posted: '1 week ago',
    featured: false,
  },
  {
    id: 6,
    title: 'iOS Engineer',
    company: 'Notion',
    location: 'San Francisco, CA',
    salary: '$140k – $180k',
    type: 'Full-time',
    stack: ['Swift', 'SwiftUI', 'CoreData'],
    posted: '2 weeks ago',
    featured: false,
  },
]

const techFilters = ['React', 'TypeScript', 'Python', 'Go', 'Rust', 'Node.js', 'Kubernetes', 'Swift', 'GraphQL']

export default function BrowseJobsPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-8 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Browse Jobs</h1>
          <p className="text-gray-400 text-lg">
            Find your next role at top tech companies
          </p>
        </div>

        {/* Search bar */}
        <div
          className="flex flex-col sm:flex-row gap-3 mb-8 p-3 rounded-xl"
          style={{ backgroundColor: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex-1 flex items-center gap-3 px-3">
            <Search className="w-5 h-5 text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill, or company..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
            />
          </div>
          <div className="hidden sm:block w-px bg-white/10 self-stretch my-1" />
          <div className="flex items-center gap-3 px-3">
            <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="flex-1 sm:w-48 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
            />
          </div>
          <button className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors">
            Search
          </button>
        </div>

        {/* Tech filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {techFilters.map((tech) => (
            <button
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-violet-400 rounded-full transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-6">
          Showing <span className="text-white font-semibold">6</span> of{' '}
          <span className="text-violet-400 font-semibold">4,200+</span> jobs
        </p>

        {/* Job list */}
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-xl p-5 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: job.featured ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.02)',
                border: job.featured
                  ? '1px solid rgba(124,58,237,0.3)'
                  : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {job.featured && (
                <div className="flex items-center gap-1 text-xs font-semibold text-violet-400 mb-3">
                  <Star className="w-3 h-3 fill-violet-400" />
                  Featured
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Logo placeholder */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: 'rgba(124,58,237,0.3)' }}
                  >
                    {job.company[0]}
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-violet-400 transition-colors mb-0.5">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{job.company}</p>

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

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {job.stack.map((tech) => (
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
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 text-center">
          <button
            className="px-8 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Load more jobs
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-16 mb-2">
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
          <span className="text-xs text-gray-600 font-medium tracking-widest uppercase">AI Crawler</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* AI-powered SF jobs crawler */}
        <AICrawler />
      </div>
    </div>
  )
}

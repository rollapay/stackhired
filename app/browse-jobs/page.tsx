import type { Metadata } from 'next'
import JobBrowser from '@/components/jobs/JobBrowser'
import AICrawler from '@/components/jobs/AICrawler'

export const metadata: Metadata = {
  title: 'Browse Jobs',
  description: 'Explore thousands of tech job openings at top companies. Filter by stack, location, salary, and more.',
}

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

        {/* Interactive job browser (search + filter + list) */}
        <JobBrowser />

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

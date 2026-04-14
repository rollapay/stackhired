import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { jobs } from '@/data/jobs'
import JobCard from '@/components/jobs/JobCard'

export default function FeaturedJobs() {
  const featured = jobs.filter((j) => j.featured).slice(0, 4)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">
              Featured Roles
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Top opportunities this week
            </h2>
          </div>
          <Link
            href="/jobs"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            View all jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {featured.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            View all jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

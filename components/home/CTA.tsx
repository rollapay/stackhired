import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-violet-700 p-12 lg:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptLTQgMEgzMHYtMmgydjJ6bTQgMEgzNHYtMmgydjJ6bS04IDBoLTJ2LTJoMnYyem04IDRoLTJ2LTJoMnYyem0tNCAwaC0ydi0yaDJ2MnptNCAwaDJ2LTJoMnYyem0tOCAwaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-100" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ready to find your dream role?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join 50,000+ developers who found their next job through StackHired.
              Filter by your stack and get matched in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-base shadow-lg"
              >
                Browse Jobs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/20 transition-colors text-base"
              >
                <Building2 className="w-5 h-5" />
                Post a Job
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Free for job seekers. Companies start at $199/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

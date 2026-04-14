import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase } from 'lucide-react'
import { companies } from '@/data/companies'

export default function FeaturedCompanies() {
  const featured = companies.filter((c) => c.featured)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">
              Top Employers
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Companies hiring now
            </h2>
          </div>
          <Link
            href="/companies"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            All companies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((company) => (
            <Link key={company.id} href={`/companies`} className="group">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="object-contain w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-400">{company.industry}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {company.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {company.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-brand-600 font-medium">
                  <Briefcase className="w-3 h-3" />
                  {company.openRoles} open roles
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            All companies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

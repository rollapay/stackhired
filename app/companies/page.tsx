import type { Metadata } from 'next'
import { Search, Briefcase, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Companies',
  description: 'Explore top tech companies hiring on Stack Hired.',
}

const companies = [
  {
    id: 'stripe',
    name: 'Stripe',
    industry: 'Fintech',
    size: '5,000–10,000',
    location: 'San Francisco, CA',
    openRoles: 12,
    stack: ['Go', 'Ruby', 'React', 'TypeScript'],
    description: 'Building economic infrastructure for the internet.',
    abbr: 'S',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    industry: 'Developer Tools',
    size: '500–1,000',
    location: 'Remote',
    openRoles: 8,
    stack: ['Next.js', 'Go', 'Rust', 'TypeScript'],
    description: 'The platform for frontend developers.',
    abbr: 'V',
  },
  {
    id: 'linear',
    name: 'Linear',
    industry: 'Developer Tools',
    size: '50–200',
    location: 'Remote',
    openRoles: 5,
    stack: ['TypeScript', 'React', 'GraphQL'],
    description: 'The issue tracking tool you\'ll enjoy using.',
    abbr: 'L',
  },
  {
    id: 'figma',
    name: 'Figma',
    industry: 'Design Tools',
    size: '1,000–5,000',
    location: 'San Francisco, CA',
    openRoles: 9,
    stack: ['C++', 'TypeScript', 'React', 'Rust'],
    description: 'Build better products as a team.',
    abbr: 'F',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    industry: 'Developer Tools',
    size: '100–500',
    location: 'Remote',
    openRoles: 10,
    stack: ['TypeScript', 'PostgreSQL', 'Go', 'Elixir'],
    description: 'The open source Firebase alternative.',
    abbr: 'Su',
  },
  {
    id: 'notion',
    name: 'Notion',
    industry: 'Productivity',
    size: '500–1,000',
    location: 'San Francisco, CA',
    openRoles: 7,
    stack: ['TypeScript', 'React', 'PostgreSQL'],
    description: 'One workspace. Every team.',
    abbr: 'N',
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    industry: 'Database / Infra',
    size: '100–500',
    location: 'Remote',
    openRoles: 6,
    stack: ['Go', 'MySQL', 'Vitess', 'Kubernetes'],
    description: 'The world\'s most advanced serverless MySQL platform.',
    abbr: 'P',
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    industry: 'Cloud Infrastructure',
    size: '1,000–5,000',
    location: 'Remote',
    openRoles: 14,
    stack: ['Go', 'HCL', 'Terraform', 'Kubernetes'],
    description: 'Consistent workflows to provision, secure, connect, and run any infrastructure.',
    abbr: 'H',
  },
]

export default function CompaniesPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:px-8 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Companies</h1>
          <p className="text-gray-400 text-lg">
            {companies.length * 10}+ companies actively hiring on Stack Hired
          </p>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl mb-8 max-w-lg"
          style={{ backgroundColor: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search companies or tech stack..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Company grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group rounded-xl p-5 cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Logo + name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-white"
                  style={{ backgroundColor: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.3)' }}
                >
                  {company.abbr}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-violet-400 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-gray-500">{company.industry}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                {company.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {company.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {company.size}
                </span>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {company.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 text-xs text-gray-400 rounded"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Open roles */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-400">
                <Briefcase className="w-3 h-3" />
                {company.openRoles} open roles
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

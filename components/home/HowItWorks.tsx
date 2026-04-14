import { Search, SlidersHorizontal, Send, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Search by stack',
    description:
      'Filter jobs by the exact technologies you use — React, Go, Kubernetes, and hundreds more. No more generic keyword searches.',
    color: 'brand',
  },
  {
    icon: SlidersHorizontal,
    step: '02',
    title: 'Refine your match',
    description:
      'Narrow down by salary range, location, remote preference, company size, and job type to find roles that truly fit.',
    color: 'violet',
  },
  {
    icon: Send,
    step: '03',
    title: 'Apply with ease',
    description:
      'One-click applications for many roles. Your profile does the talking — no cover letter required unless you want to.',
    color: 'indigo',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Get hired faster',
    description:
      'Companies on StackHired are actively hiring. Expect responses within days, not weeks. Your dream stack, your dream job.',
    color: 'emerald',
  },
]

const colorMap: Record<string, { bg: string; icon: string; number: string }> = {
  brand: {
    bg: 'bg-brand-50',
    icon: 'text-brand-600',
    number: 'text-brand-200',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'text-violet-600',
    number: 'text-violet-200',
  },
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'text-indigo-600',
    number: 'text-indigo-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    number: 'text-emerald-200',
  },
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Land your next role in 4 steps
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            StackHired is built for engineers who know their worth and know their stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const colors = colorMap[step.color]
            const Icon = step.icon

            return (
              <div key={step.step} className="relative">
                <div className={`${colors.bg} rounded-2xl p-6 h-full`}>
                  <div className="mb-4">
                    <span className={`text-6xl font-black ${colors.number} select-none`}>
                      {step.step}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} border border-current/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
                {/* Connector arrow for desktop */}
                {step.step !== '04' && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gray-200" />
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-300 -mt-1" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

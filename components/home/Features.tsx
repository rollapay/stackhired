import {
  Code2,
  Globe,
  DollarSign,
  Bell,
  Shield,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Stack-First Search',
    description:
      'Filter by any combination of programming languages, frameworks, databases, and tools. Find jobs that match your exact expertise.',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'Remote-First',
    description:
      'Over 60% of roles on StackHired are remote or hybrid. Find opportunities anywhere in the world that work for your lifestyle.',
    highlight: false,
  },
  {
    icon: DollarSign,
    title: 'Transparent Salaries',
    description:
      'Every job listing includes a verified salary range. No more wasting time on interviews only to be lowballed at the offer stage.',
    highlight: false,
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description:
      'Set up custom job alerts based on your preferred stack, location, and salary. Get notified the moment a matching role is posted.',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Verified Companies',
    description:
      'Every company on StackHired is verified and actively hiring. No ghost listings, no expired postings, no bait-and-switch roles.',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Fast Applications',
    description:
      'Apply in seconds with your StackHired profile. Companies get exactly what they need, and you skip the repetitive form-filling.',
    highlight: false,
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            Why StackHired
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for engineers, not recruiters
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We designed StackHired the way engineers think — by technology, salary, and fit.
            Not by job title keyword soup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`relative rounded-2xl p-6 ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-brand-600 to-violet-600 text-white'
                    : 'bg-white border border-gray-100'
                } card-hover`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    feature.highlight
                      ? 'bg-white/20'
                      : 'bg-brand-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      feature.highlight ? 'text-white' : 'text-brand-600'
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    feature.highlight ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    feature.highlight ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

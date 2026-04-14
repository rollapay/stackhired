import { Briefcase, Users, TrendingUp, Sparkles } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '1.6M+', label: 'Active Jobs' },
  { icon: Users, value: '600K+', label: 'Tech Talents' },
  { icon: TrendingUp, value: '50K+', label: 'Successful Matches' },
  { icon: Sparkles, value: '5K+', label: 'Top Companies' },
]

export default function StatsBar() {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <Icon className="w-7 h-7 text-brand-500" />
              <div className="text-4xl sm:text-5xl font-bold text-violet-400">
                {value}
              </div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

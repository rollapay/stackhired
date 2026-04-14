'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Sparkles } from 'lucide-react'

const popularStacks = ['React', 'Go', 'Python', 'TypeScript', 'Kubernetes', 'Rust', 'Next.js', 'PostgreSQL']

export default function Hero() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('location', location)
    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-950 pt-20 pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjI4M2YiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0tNCAwSDMwdi0yaDJ2MnptNCAwSDM0di0yaDJ2MnptLTggMGgtMnYtMmgydjJ6bTggNGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem00IDBoLTJ2LTJoMnYyem0tOCAwSDI2di0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-600/20 border border-brand-500/30 rounded-full text-brand-300 text-sm font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>4,200+ jobs from 300+ tech companies</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          Find jobs by the{' '}
          <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
            stack
          </span>{' '}
          you love
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Search thousands of engineering roles by the exact technologies you use.
          No more sifting through irrelevant listings.
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/30 p-2 flex flex-col sm:flex-row gap-2"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, skill, or company..."
              className="flex-1 text-gray-900 placeholder-gray-400 text-sm outline-none bg-transparent"
            />
          </div>
          <div className="hidden sm:block w-px bg-gray-200 self-stretch my-2" />
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="flex-1 text-gray-900 placeholder-gray-400 text-sm outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            Search Jobs
          </button>
        </form>

        {/* Popular stacks */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-gray-500">Popular:</span>
          {popularStacks.map((stack) => (
            <button
              key={stack}
              onClick={() => router.push(`/jobs?q=${stack}`)}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-xs font-medium rounded-full border border-white/10 hover:border-white/20 transition-all"
            >
              {stack}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '4,200+', label: 'Open Roles' },
            { value: '300+', label: 'Companies' },
            { value: '50k+', label: 'Developers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

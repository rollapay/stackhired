import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const trustBadges = [
  'LinkedIn Integration',
  'GitHub Sync',
  'Slack Connect',
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto pt-24 pb-16">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Talent Meets </span>
          <span className="text-violet-400">Opportunity</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Connect with your dream job or perfect candidate through intelligent AI matching.
          Rich video profiles, real-time Slack communication, and seamless LinkedIn &amp; GitHub integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/30 text-base"
          >
            I&apos;m a Developer
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/for-employers"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 text-base"
          >
            I&apos;m Hiring Talent
            <span role="img" aria-label="briefcase">🧳</span>
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-gray-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

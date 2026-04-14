import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Upload, Video, MousePointer, MessageSquare, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Employers',
  description: 'Post jobs, get AI-matched with qualified candidates, and hire smarter with Stack Hired.',
}

const features = [
  {
    icon: Upload,
    title: 'Post Jobs in Bulk or One-by-One',
    description: 'Upload a CSV with multiple roles or post single jobs in seconds. Or use our Slack bot to post directly from your workspace.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Candidate Matching',
    description: 'Our matching engine analyzes each candidate\'s skills, GitHub contributions, video profile, and experience to surface the best fits for your roles.',
  },
  {
    icon: Video,
    title: 'Rich Candidate Profiles',
    description: 'Review video introductions, GitHub repositories, work samples, and portfolios — all in one place before you schedule a single interview.',
  },
  {
    icon: MousePointer,
    title: 'One-Click Interview Invites',
    description: 'When you find a great match, send an interview invitation with a single click. AI can also automate this when a match score exceeds your threshold.',
  },
  {
    icon: MessageSquare,
    title: 'Slack-Native Workflow',
    description: 'Post jobs, receive match notifications, and message candidates — all from within Slack. Your team doesn\'t need to learn a new tool.',
  },
  {
    icon: Bell,
    title: 'Instant Match Alerts',
    description: 'Receive notifications the moment a top-matching candidate becomes available. Never miss a great hire because of slow processes.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$199',
    period: '/mo',
    description: 'Perfect for early-stage startups hiring their first engineers.',
    features: ['5 active job posts', 'AI matching', 'Basic candidate profiles', 'Email support'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$499',
    period: '/mo',
    description: 'For scaling teams hiring across multiple roles simultaneously.',
    features: ['25 active job posts', 'AI matching + auto-invites', 'Video profiles + GitHub', 'Slack integration', 'Priority support'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large engineering organizations with complex hiring needs.',
    features: ['Unlimited job posts', 'Dedicated AI matching', 'ATS integrations', 'CSV bulk upload', 'Dedicated account manager'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function ForEmployersPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/30 mb-6"
            style={{ backgroundColor: 'rgba(109,40,217,0.2)' }}
          >
            For Employers
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Find Perfect Candidates.<br />
            <span className="text-violet-400">Hire Smarter.</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Post jobs, get AI-matched with qualified candidates, and streamline your hiring
            process with powerful automation and integrations.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-brand-600/25 text-base"
          >
            Start Hiring Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Everything You Need to Hire the Best Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card rounded-xl p-6 card-hover"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(109,40,217,0.6)' }}
                >
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            No agency fees. No per-hire charges. Just a simple monthly subscription.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: tier.highlighted ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.02)',
                  border: tier.highlighted
                    ? '1px solid rgba(124,58,237,0.5)'
                    : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tier.highlighted && (
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-gray-400 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
                    tier.highlighted
                      ? 'bg-brand-600 hover:bg-brand-500 text-white'
                      : 'border border-white/20 hover:border-white/40 text-white hover:bg-white/5'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { CheckCircle2, ArrowRight, Briefcase } from 'lucide-react'

const checkItems = [
  'Post jobs individually or upload in bulk via CSV',
  'AI automatically matches you with qualified candidates',
  'Review rich profiles with video intros and code samples',
  'Send interview invitations with one click automation',
  'Post jobs directly from Slack using chat commands',
  'Get instant alerts when top candidates match your roles',
]

const mockupBadges = [
  { icon: '⚡', text: 'AI Matching Active', color: 'text-violet-400' },
  { icon: '💬', text: 'Slack Integration Connected', color: 'text-violet-400' },
  { icon: '📊', text: 'Bulk Upload Enabled', color: 'text-violet-400' },
]

export default function ForEmployers() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Mockup card (reversed layout vs ForCandidates) */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div
              className="w-full max-w-sm rounded-2xl p-8"
              style={{
                backgroundColor: '#1A1A2E',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 25px 50px rgba(124,58,237,0.15)',
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(124,58,237,0.2)', border: '2px solid rgba(124,58,237,0.4)' }}
                >
                  <Briefcase className="w-12 h-12 text-brand-400" />
                </div>
              </div>

              {/* Job post placeholder */}
              <div className="text-center mb-6">
                <div className="h-4 w-40 bg-white/10 rounded mx-auto mb-2" />
                <div className="h-3 w-28 bg-white/5 rounded mx-auto" />
              </div>

              {/* Status badges */}
              <div className="space-y-3">
                {mockupBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
                  >
                    <span className="text-base">{badge.icon}</span>
                    <span className={`text-sm font-medium ${badge.color}`}>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="order-1 lg:order-2">
            {/* Section tag */}
            <div
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/30 mb-6"
              style={{ backgroundColor: 'rgba(109,40,217,0.2)' }}
            >
              For Employers
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Find Perfect Candidates.<br />
              Hire Smarter.
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Post jobs, get AI-matched with qualified candidates, and streamline your hiring
              process with powerful automation and integrations.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/for-employers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Start Hiring Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

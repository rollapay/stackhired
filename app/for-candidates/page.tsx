import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Github, Linkedin, Video, Zap, MessageSquare, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Candidates',
  description: 'Build your profile, get AI-matched to jobs, and land your next tech role faster with Stack Hired.',
}

const steps = [
  {
    icon: Linkedin,
    title: 'Sign In with LinkedIn, GitHub, or Google',
    description: 'Your profile is auto-populated in seconds. No more copying your resume into yet another form.',
  },
  {
    icon: Video,
    title: 'Record a 60-Second Video Intro',
    description: 'Show off your personality and passion. Employers who see video profiles are 3x more likely to reach out.',
  },
  {
    icon: Github,
    title: 'Connect Your GitHub Repositories',
    description: 'Let your code speak for itself. Select which repos to showcase and add context to each project.',
  },
  {
    icon: Zap,
    title: 'Get AI-Matched to Jobs',
    description: 'Our AI analyzes your skills, experience, and preferences to surface the roles you\'ll actually love.',
  },
  {
    icon: MessageSquare,
    title: 'Chat with Recruiters in Slack',
    description: 'No email chains. Communicate with hiring teams directly in Slack — your native environment.',
  },
  {
    icon: Bell,
    title: 'Get Notified of Top Matches',
    description: 'Receive instant alerts when companies that match your criteria post new roles.',
  },
]

export default function ForCandidatesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/30 mb-6"
            style={{ backgroundColor: 'rgba(109,40,217,0.2)' }}
          >
            For Candidates
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Build Your Profile.<br />
            <span className="text-violet-400">Get Hired Faster.</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Create a standout profile that goes beyond traditional resumes.
            Let AI match you with opportunities that align with your skills and career goals.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-brand-600/25 text-base"
          >
            Create Your Free Profile
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="glass-card rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(109,40,217,0.4)' }}
                  >
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-xs font-bold text-violet-400/60">Step {i + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to find your next role?
          </h2>
          <p className="text-gray-400 mb-8">
            Join 600,000+ tech professionals who use Stack Hired to find opportunities that match their skills.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-200 text-base"
          >
            Get Started — It&apos;s Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

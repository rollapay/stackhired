import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Video, Github, Linkedin, MessageSquare, Zap, Shield, Globe, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all features of the Stack Hired AI-powered recruitment platform.',
}

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms analyze skills, experience, and preferences to create perfect candidate-job matches automatically. Our ML model improves with every match.',
    tag: 'Core',
  },
  {
    icon: Video,
    title: 'Video Profiles',
    description: 'Stand out with short video introductions that showcase your personality and passion beyond the resume. Companies who review video profiles hire 40% faster.',
    tag: 'Candidates',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn & Google Sign-In',
    description: 'Import your professional profile instantly with one-click OAuth authentication and automated data sync. Your work history, education, and skills — all populated automatically.',
    tag: 'Both',
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description: 'Connect your repositories, showcase your code, and let your work speak for itself. Employers can browse your commits, stars, and contributions directly in your profile.',
    tag: 'Candidates',
  },
  {
    icon: MessageSquare,
    title: 'Slack Communication',
    description: 'Chat directly with recruiters and candidates through Slack integration for seamless collaboration. No more context-switching to email.',
    tag: 'Both',
  },
  {
    icon: Zap,
    title: 'Bulk Job Posting',
    description: 'Upload multiple job listings at once via CSV or post directly from Slack channels. Onboard your entire open role list in one go.',
    tag: 'Employers',
  },
  {
    icon: Shield,
    title: 'Auto Interview Invites',
    description: 'AI automatically sends interview invitations when top matches are found, saving you valuable time. Set your threshold and let it run.',
    tag: 'Employers',
  },
  {
    icon: Globe,
    title: 'Real-Time Alerts',
    description: 'Get instant notifications for new matches, messages, and interview opportunities across any device.',
    tag: 'Both',
  },
  {
    icon: GitBranch,
    title: 'Work Samples Portfolio',
    description: 'Build a rich portfolio with code samples, designs, and projects to showcase your expertise. Go beyond the resume.',
    tag: 'Candidates',
  },
]

const tagColors: Record<string, string> = {
  Core: 'text-violet-400 bg-violet-900/40 border-violet-500/30',
  Candidates: 'text-emerald-400 bg-emerald-900/30 border-emerald-500/20',
  Employers: 'text-amber-400 bg-amber-900/30 border-amber-500/20',
  Both: 'text-blue-400 bg-blue-900/30 border-blue-500/20',
}

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="px-6 md:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Everything You Need<br />
            <span className="text-violet-400">to Succeed</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Modern recruitment platform built for the way tech teams work today.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, tag }) => (
              <div
                key={title}
                className="glass-card rounded-xl p-6 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(109,40,217,0.6)' }}
                  >
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 lg:px-12 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all duration-200 text-sm"
            >
              I&apos;m a Developer <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/for-employers"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 text-sm"
            >
              I&apos;m Hiring Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

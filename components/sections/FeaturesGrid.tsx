import {
  Sparkles,
  Video,
  Linkedin,
  Github,
  MessageSquare,
  Zap,
  Shield,
  Globe,
  GitBranch,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Matching',
    description:
      'Advanced algorithms analyze skills, experience, and preferences to create perfect candidate-job matches automatically.',
  },
  {
    icon: Video,
    title: 'Video Profiles',
    description:
      'Stand out with short video introductions that showcase your personality and passion beyond the resume.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn & Google Sign-In',
    description:
      'Import your professional profile instantly with one-click OAuth authentication and automated data sync.',
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description:
      'Connect your repositories, showcase your code, and let your work speak for itself.',
  },
  {
    icon: MessageSquare,
    title: 'Slack Communication',
    description:
      'Chat directly with recruiters and candidates through Slack integration for seamless collaboration.',
  },
  {
    icon: Zap,
    title: 'Bulk Job Posting',
    description:
      'Upload multiple job listings at once via CSV or post directly from Slack channels.',
  },
  {
    icon: Shield,
    title: 'Auto Interview Invites',
    description:
      'AI automatically sends interview invitations when top matches are found, saving you valuable time.',
  },
  {
    icon: Globe,
    title: 'Real-Time Alerts',
    description:
      'Get instant notifications for new matches, messages, and interview opportunities.',
  },
  {
    icon: GitBranch,
    title: 'Work Samples',
    description:
      'Build a rich portfolio with code samples, designs, and projects to showcase your expertise.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern recruitment platform built for the way tech teams work today
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-xl p-6 card-hover cursor-default"
            >
              {/* Icon badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(109,40,217,0.6)' }}
              >
                <Icon className="w-5 h-5 text-violet-400" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

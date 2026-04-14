import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Github, Linkedin, ArrowRight, User, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Join Stack Hired and start finding your next tech role or hire today.',
}

export default function GetStartedPage() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Stack Hired</span>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Join Stack Hired
        </h1>
        <p className="text-gray-400 text-center mb-10 text-sm">
          AI-powered recruitment for the tech industry
        </p>

        {/* Role selector */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-200 hover:border-violet-500/50 hover:bg-violet-900/10"
            style={{ border: '2px solid rgba(124,58,237,0.5)', backgroundColor: 'rgba(124,58,237,0.1)' }}
          >
            <div className="w-12 h-12 rounded-full bg-brand-600/30 flex items-center justify-center">
              <User className="w-6 h-6 text-violet-400" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">I&apos;m a Developer</div>
              <div className="text-xs text-gray-400">Find my next role</div>
            </div>
          </button>

          <button
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-200 hover:border-violet-500/50 hover:bg-violet-900/10"
            style={{ border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-gray-300" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">I&apos;m Hiring</div>
              <div className="text-xs text-gray-400">Find great candidates</div>
            </div>
          </button>
        </div>

        {/* OAuth */}
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="space-y-3 mb-5">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0077B5' }}>
              <Linkedin className="w-5 h-5" />
              Continue with LinkedIn
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: '#24292e', border: '1px solid rgba(255,255,255,0.15)' }}>
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="relative flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <span className="text-xs text-gray-500">or use email</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-500 outline-none transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-500 outline-none transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-violet-400 hover:text-violet-300 transition-colors">
            Sign In
          </Link>
        </p>

        <p className="text-center text-xs text-gray-600 mt-3">
          By creating an account you agree to our{' '}
          <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

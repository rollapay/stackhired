import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Github, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Stack Hired account.',
}

export default function SignInPage() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Stack Hired</span>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Welcome back
          </h1>
          <p className="text-gray-400 text-sm text-center mb-8">
            Sign in to your Stack Hired account
          </p>

          {/* OAuth buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
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

          <div className="relative flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Email form */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-500 outline-none focus:border-brand-500 transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-500 outline-none focus:border-brand-500 transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
              Sign In
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/get-started" className="text-violet-400 hover:text-violet-300 transition-colors">
              Get started for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

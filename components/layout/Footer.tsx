import Link from 'next/link'
import { Code2, Github, Linkedin } from 'lucide-react'

const footerLinks = {
  'For Candidates': [
    { label: 'Browse Jobs', href: '/browse-jobs' },
    { label: 'Create Profile', href: '/get-started' },
    { label: 'How It Works', href: '/for-candidates' },
  ],
  'For Employers': [
    { label: 'Post a Job', href: '/for-employers' },
    { label: 'Sign Up', href: '/get-started' },
    { label: 'Pricing', href: '/for-employers#pricing' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#0D0D0D' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Stack Hired</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              AI-powered recruitment platform connecting tech talent with opportunity.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Stack Hired. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

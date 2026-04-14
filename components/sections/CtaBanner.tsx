import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-2xl py-16 px-8 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)',
          }}
        >
          {/* Grid texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the AI-powered recruitment revolution. Whether you&apos;re looking for your
              next role or your next hire, Stack Hired makes it effortless.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Get Started as Candidate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Start Hiring
                <span role="img" aria-label="briefcase">🧳</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

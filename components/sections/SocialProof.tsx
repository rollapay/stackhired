const companies = [
  { name: 'Stripe', abbr: 'S' },
  { name: 'Vercel', abbr: 'V' },
  { name: 'Linear', abbr: 'L' },
  { name: 'Figma', abbr: 'F' },
  { name: 'Notion', abbr: 'N' },
  { name: 'Supabase', abbr: 'Su' },
  { name: 'HashiCorp', abbr: 'H' },
  { name: 'Airbnb', abbr: 'A' },
]

export default function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Trusted by Leading Tech Companies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Join thousands of innovative companies finding their next great hire through Stack Hired
        </p>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map(({ name, abbr }) => (
            <div
              key={name}
              className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                {abbr}
              </div>
              <span className="text-gray-300 font-semibold text-lg">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Features() {
  const features = [
    {
      title: '3D storytelling',
      desc: 'Immersive Spline scenes that make your brand unforgettable.',
    },
    {
      title: 'Glassmorphic design',
      desc: 'Premium blur, depth, and light play with perfect restraint.',
    },
    {
      title: 'Performance-first',
      desc: 'Optimized builds, accessibility, and SEO from day one.',
    },
    {
      title: 'CMS & handoff',
      desc: 'Editable content, design systems, and smooth dev workflows.',
    },
  ]

  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              We blend product design, motion, and engineering
            </h2>
            <p className="mt-6 text-white/70 md:max-w-lg">
              Our process fuses art direction with solid technical execution. From concept to launch, we obsess over the details that drive conversion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-4 opacity-90" />
                <div className="text-white font-medium">{f.title}</div>
                <div className="text-white/60 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </section>
  )
}

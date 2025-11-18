export default function Showcase() {
  const items = [
    {
      title: 'Card OS',
      tag: 'Product Website',
    },
    {
      title: 'NeoPay',
      tag: 'Brand + Site',
    },
    {
      title: 'Flow Capital',
      tag: 'Site + Motion',
    },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Recent work</h3>
          <a href="#contact" className="text-cyan-300/90 hover:text-cyan-200 text-sm">Book a project →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 group-hover:opacity-90 transition">
                <div className="h-full w-full bg-[radial-gradient(600px_200px_at_60%_20%,rgba(56,189,248,0.25),transparent)]" />
              </div>
              <div className="p-5">
                <div className="text-white font-medium">{i.title}</div>
                <div className="text-white/60 text-sm">{i.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

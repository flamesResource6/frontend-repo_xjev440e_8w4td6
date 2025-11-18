export default function Logos() {
  const logos = [
    'Stripe', 'Plaid', 'Coinbase', 'Square', 'Brex', 'Ramp'
  ]
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-center text-white/60 text-sm mb-6">Trusted by ambitious fintech teams</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {logos.map((l) => (
              <div key={l} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 text-white/70">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

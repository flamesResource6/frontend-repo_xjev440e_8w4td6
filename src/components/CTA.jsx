export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Ready to design something iconic?
              </h3>
              <p className="mt-3 text-white/70">Tell us about your product and we’ll propose a tailored plan within 24 hours.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
              <input className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company / Project" />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 font-semibold text-slate-900">
                Request proposal
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </section>
  )
}

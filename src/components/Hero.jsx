import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_30%_-10%,rgba(34,211,238,0.15),transparent),radial-gradient(900px_400px_at_80%_10%,rgba(59,130,246,0.18),transparent),linear-gradient(to_bottom_right,#0B1220,#0B1220)]" />
      </div>

      {/* Spline 3D */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[60%]">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Premium fintech websites, reinvented
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight tracking-tight text-white">
            Design-first websites for modern fintech brands
          </h1>

          <p className="mt-6 text-lg text-white/70 md:max-w-xl">
            We craft premium, glassmorphic experiences with 3D storytelling, motion, and impeccable detail — built to convert and scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-slate-900 font-semibold shadow-[0_20px_60px_-20px_rgba(56,189,248,0.6)] hover:shadow-[0_25px_80px_-20px_rgba(56,189,248,0.8)] transition-shadow">Talk to our team</a>
            <a href="#work" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90">See recent work</a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div>
              <div className="text-3xl font-semibold text-white">+55</div>
              <div className="text-xs uppercase tracking-wider">projects delivered</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-semibold text-white">4.9/5</div>
              <div className="text-xs uppercase tracking-wider">client rating</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-semibold text-white">2–4 wks</div>
              <div className="text-xs uppercase tracking-wider">avg. timeline</div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle glass overlay to keep spline behind content focus */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0B1220]/10 via-transparent to-transparent" />
    </section>
  )
}

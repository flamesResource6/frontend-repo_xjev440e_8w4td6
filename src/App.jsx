import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      {/* glow backdrop */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-10 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between text-white/50">
          <p>© {new Date().getFullYear()} Astryx. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

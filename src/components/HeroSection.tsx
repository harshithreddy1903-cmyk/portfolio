import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'

const nodes = [
  { x: 50, y: 43, size: 23, color: '#f1f5ff', label: 'About me', target: 'about' },
  { x: 26, y: 25, size: 12, color: '#7eb8f7', label: 'MandiPulse', target: 'mandipulse' },
  { x: 77, y: 22, size: 13, color: '#a78bfa', label: 'Kannada NLP', target: 'kannada' },
  { x: 81, y: 61, size: 10, color: '#34d399', label: 'Research', target: 'palm-leaf' },
  { x: 31, y: 76, size: 11, color: '#f9a8d4', label: 'Contact', target: 'contact' },
  { x: 13, y: 54, size: 9, color: '#fbbf24', label: 'Skills', target: 'skills' },
]
const lines = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2]]

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      <nav aria-label="Main navigation" className="site-nav mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-6 md:px-8">
        <a href="#hero" aria-label="Harshith Reddy home" className="text-sm font-medium tracking-[0.25em] text-white/90">HR<span className="text-blue-300">.</span></a>
        <div className="flex flex-wrap items-center gap-5 text-xs text-white/65 sm:gap-7 sm:text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/Harshith_Reddy_Resume.pdf" download className="hidden items-center rounded-full border border-white/20 px-4 py-2 text-white/85 sm:inline-flex">Resume <Download size={13} className="ml-2" aria-hidden="true" /></a>
        </div>
      </nav>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-3 px-6 pb-14 pt-14 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-8 md:py-24">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <p className="mb-7 flex items-center gap-2.5 text-xs tracking-[0.16em] text-emerald-200/85 uppercase"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />Open to software engineering internships</p>
          <h1 className="display-font text-[clamp(3.7rem,7vw,6.5rem)] leading-[0.96] font-light tracking-tight text-white/95">Harshith<br /><span className="italic text-blue-200">Reddy K M.</span></h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/65">I build useful software with thoughtful interfaces, reliable APIs, and AI grounded in real information.</p>
          <p className="mt-4 text-sm leading-relaxed text-white/50">Final-year CSE (Data Science) student at SVIT, Bangalore. Expected graduation: 2027.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="primary-action">Explore my work <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="/Harshith_Reddy_Resume.pdf" download className="secondary-action">Download resume <Download size={15} aria-hidden="true" /></a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50"><span>React + FastAPI</span><span>Applied AI & NLP</span><span>Built and deployed</span></div>
        </motion.div>
        <div className="constellation-map relative mt-10 h-[320px] md:mt-0 md:h-[460px]" aria-label="Explore the portfolio constellation">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(87,104,194,0.13),transparent_65%)]" aria-hidden="true" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {lines.map(([a, b], i) => <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="rgba(170,191,255,0.24)" strokeWidth="0.18" strokeDasharray="1 1.5" />)}
          </svg>
          {nodes.map((node, i) => (
            <motion.a key={node.target} href={`#${node.target}`} aria-label={`Explore ${node.label}`} className="constellation-node group" style={{ left: `${node.x}%`, top: `${node.y}%` }} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <span className="constellation-star" style={{ width: node.size, height: node.size, background: node.color, boxShadow: `0 0 18px ${node.color}65, 0 0 45px ${node.color}25` }} />
              <span className="constellation-label group-hover:text-white">{node.label}</span>
            </motion.a>
          ))}
          <p className="absolute bottom-0 w-full text-center text-[10px] tracking-[0.22em] text-white/45 uppercase">A constellation of things I build</p>
        </div>
      </div>
      <a href="#about" className="mx-auto mb-8 flex w-fit items-center gap-3 text-xs tracking-widest text-white/45">SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" /></a>
    </section>
  )
}

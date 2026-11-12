import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Sprout, ScanText, BookOpen, Layers } from 'lucide-react'

const projects = [
  {
    id: 'mandipulse', title: 'MandiPulse', subtitle: 'Karnataka Market Assistant', status: 'Deployed', accent: '#7eb8f7', icon: Sprout,
    description: 'A conversational market assistant that turns official AGMARKNET crop records into clear price comparisons and practical buying plans.',
    details: ['React and FastAPI with Gemini API guidance grounded in official market records.', 'Buying plans in kilograms, quintals and tonnes, with freight and budget estimates, visual PDF exports, and optional Supabase sign-in.'],
    evidence: '203 automated tests across backend and frontend logic',
    pills: ['React', 'FastAPI', 'Gemini API', 'Supabase', 'Vercel'],
    live: 'https://mandipulse-rosy.vercel.app/', repo: 'https://github.com/harshithreddy1903-cmyk/MandiPulse',
  },
  {
    id: 'kannada', title: 'Kannada Chandas Identifier', subtitle: 'Classical language, computational rules', status: 'Team project', accent: '#a78bfa', icon: ScanText,
    description: 'Developed in a four-member team: a Flask application that identifies poetic meters in classical Kannada poetry.',
    details: ['The rule-based NLP pipeline syllabifies Unicode text, classifies Laghu/Guru patterns and matches traditional meters.', 'Supports poem analysis, image scanning, saved history and PDF export; deployed on Render.'],
    evidence: 'Rule-based NLP / four-member team',
    pills: ['Python', 'Flask', 'Unicode', 'NLP'],
    live: null, repo: 'https://github.com/harshithreddy1903-cmyk/Kannada_Chandas_Identifier_phase_1',
  },
  {
    id: 'academic-bot', title: 'Academic Resources Bot', subtitle: 'Answers grounded in course material', status: 'In progress', accent: '#f9a8d4', icon: BookOpen,
    description: 'Collaborating in a four-member team on a Telegram assistant that retrieves answers from college course PDFs using a RAG pipeline.',
    details: ['Developing PDF extraction and ChromaDB vector indexing workflows.', 'Exploring multimodal processing of course text and diagrams with LLaVA.'],
    evidence: 'Ongoing team development', pills: ['Python', 'RAG', 'ChromaDB', 'LLaVA'],
    live: null, repo: 'https://github.com/harshithreddy1903-cmyk/Telegram_Study_Bot',
  },
  {
    id: 'palm-leaf', title: 'Palm Leaf Manuscript Translator', subtitle: 'Preserving Old Kannada manuscripts', status: 'In progress', accent: '#86d7b1', icon: Layers,
    description: 'Collaborating in a four-member team on an image restoration, OCR and translation pipeline for degraded Old Kannada palm-leaf manuscripts.',
    details: ['Developing a U-Net model with a ResNet34 backbone for manuscript binarization.', 'Reviewed 12+ research papers on image processing and Kannada NLP to inform the design.'],
    evidence: '12+ research papers reviewed', pills: ['Python', 'PyTorch', 'U-Net', 'Computer Vision'],
    live: null, repo: null,
  },
]

export default function ProjectsSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="projects" className="relative z-10 px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div><p className="section-kicker">002 / selected work</p><h2 className="display-font text-5xl font-light tracking-tight text-white/90 italic md:text-7xl">From idea to interface.</h2></div>
          <span className="hidden text-xs tracking-widest text-white/50 uppercase md:block">4 projects</span>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.article id={project.id} key={project.id} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.1 }} className={`section-panel panel-shimmer overflow-hidden rounded-3xl ${i === 0 ? 'featured-project' : ''}`}>
                <div className="grid md:grid-cols-[200px_1fr]">
                  <div className="flex items-center justify-between gap-5 border-b border-white/10 p-6 md:flex-col md:items-start md:border-r md:border-b-0 md:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10" style={{ color: project.accent, background: `${project.accent}0c` }}><Icon size={26} strokeWidth={1.3} aria-hidden="true" /></div>
                    <div className="md:mt-12"><p className="text-xs tracking-[0.2em] text-white/45">0{i + 1}</p><p className="mt-2 text-xs" style={{ color: project.accent }}>{project.status}</p></div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="mb-3 text-[10px] tracking-[0.18em] uppercase" style={{ color: project.accent }}>{project.subtitle}</p>
                    <h3 className="display-font mb-4 text-3xl font-light text-white/95 md:text-4xl">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
                    <ul className="mt-4 space-y-2 pl-4 text-sm leading-relaxed text-white/60 list-disc">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
                    <p className="mt-5 text-xs text-white/60">{project.evidence}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.pills.map(pill => <span key={pill} className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/65">{pill}</span>)}</div>
                    {(project.live || project.repo) && <div className="mt-6 flex flex-wrap gap-3">
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="primary-action text-xs" aria-label={`Open ${project.title} live website`}>Visit live project <ArrowUpRight size={14} aria-hidden="true" /></a>}
                      {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="secondary-action text-xs" aria-label={`View ${project.title} on GitHub`}><ExternalLink size={14} aria-hidden="true" />{project.id === 'kannada' ? 'Phase 1 source' : 'View source'}</a>}
                    </div>}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

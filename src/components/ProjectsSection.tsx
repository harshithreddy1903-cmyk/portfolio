import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProjectClusterProps {
  color: string
  positions: Array<{ cx: number; cy: number; r: number }>
}

function StarCluster({ color, positions }: ProjectClusterProps) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="mb-4">
      {/* Connection lines */}
      {positions.slice(0, -1).map((pos, i) => (
        <line
          key={i}
          x1={pos.cx}
          y1={pos.cy}
          x2={positions[i + 1].cx}
          y2={positions[i + 1].cy}
          stroke={color}
          strokeOpacity="0.15"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      ))}
      {positions.map((pos, i) => (
        <circle key={i} cx={pos.cx} cy={pos.cy} r={pos.r} fill={color} fillOpacity="0.5" />
      ))}
    </svg>
  )
}

const projects = [
  {
    num: '01',
    year: '2024',
    accent: '#7eb8f7',
    tag: 'RAG · Generative AI',
    title: 'Telegram Study Bot',
    description:
      'A Q&A chatbot powered by a Retrieval-Augmented Generation pipeline. Queries a custom knowledge base using Python and foundational Generative AI concepts.',
    pills: ['Python', 'RAG', 'GenAI', 'Telegram API'],
    cluster: [
      { cx: 15, cy: 30, r: 3 },
      { cx: 30, cy: 15, r: 2.5 },
      { cx: 50, cy: 25, r: 4 },
      { cx: 40, cy: 50, r: 2 },
      { cx: 60, cy: 45, r: 3 },
      { cx: 70, cy: 60, r: 2.5 },
    ],
  },
  {
    num: '02',
    year: '2024',
    accent: '#a78bfa',
    tag: 'Python · DSA · OOP',
    title: 'Kannada Prosody Identifier',
    description:
      'Parses and identifies Kannada poetic meters (Chandassu). Models syllables, feet, and meters using OOP — classifies Kanda Padya, Shatpadi, and Vruttas via custom DSA algorithms.',
    pills: ['Python', 'DSA', 'OOP', 'Unicode'],
    cluster: [
      { cx: 20, cy: 20, r: 2.5 },
      { cx: 40, cy: 15, r: 3 },
      { cx: 55, cy: 35, r: 2 },
      { cx: 30, cy: 45, r: 3.5 },
      { cx: 50, cy: 55, r: 2.5 },
      { cx: 65, cy: 50, r: 2 },
      { cx: 20, cy: 60, r: 3 },
    ],
  },
  {
    num: '03',
    year: '2023',
    accent: '#34d399',
    tag: 'OpenCV · MySQL · Python',
    title: 'Face Recognition Attendance',
    description:
      'Automated attendance system using OpenCV for real-time facial recognition. Identifies registered individuals from a live feed and logs attendance to a MySQL database.',
    pills: ['Python', 'OpenCV', 'MySQL', 'Computer Vision'],
    cluster: [
      { cx: 25, cy: 25, r: 3 },
      { cx: 45, cy: 20, r: 2 },
      { cx: 60, cy: 30, r: 3.5 },
      { cx: 35, cy: 50, r: 2.5 },
      { cx: 55, cy: 55, r: 2 },
      { cx: 15, cy: 55, r: 2 },
      { cx: 40, cy: 65, r: 3 },
      { cx: 65, cy: 60, r: 2.5 },
    ],
  },
]

const sectionAnim = {
  initial: { opacity: 0, y: 50 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, margin: '-60px' },
}

const labelAnim = {
  initial: { opacity: 0, x: -20 } as const,
  whileInView: { opacity: 1, x: 0 } as const,
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-60px' },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 min-h-screen px-8 py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <motion.p {...labelAnim} className="text-white/25 text-xs tracking-[0.3em] uppercase font-light mb-4">
              002 — projects
            </motion.p>
            <motion.h2
              {...sectionAnim}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-6xl md:text-7xl text-white/80 font-light tracking-tight leading-none italic"
            >
              what i've built.
            </motion.h2>
          </div>
          <span className="hidden md:block text-white/15 text-xs tracking-[0.3em] uppercase">
            3 projects
          </span>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true, margin: '-60px' }}
              className="section-panel panel-shimmer rounded-3xl overflow-hidden group cursor-pointer hover:border-white/10 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0">
                {/* Left panel */}
                <div className="p-8 flex flex-col justify-between md:border-r border-white/5">
                  <StarCluster color={project.accent} positions={project.cluster} />
                  <div>
                    <p className="text-white/15 text-xs tracking-widest">{project.num}</p>
                    <p className="text-white/20 text-xs mt-1">{project.year}</p>
                  </div>
                </div>

                {/* Right panel */}
                <div className="p-8">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.tag}
                  </p>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-3xl text-white/80 font-light mb-4 group-hover:text-white/95 transition-colors duration-500 italic"
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="text-[10px] px-3 py-1 rounded-full border border-white/8 text-white/30"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

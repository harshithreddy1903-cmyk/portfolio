import { motion } from 'framer-motion'

const stats = [
  { label: 'Year', value: '3rd — B.Tech' },
  { label: 'Field', value: 'Computer Science' },
  { label: 'Institute', value: 'SVIT, Bangalore' },
  { label: 'Focus', value: 'AI & Systems' },
]

// Tiny star cluster for the "constellation detail"
function MiniConstellation() {
  const stars = [
    { cx: 60, cy: 40, r: 3 },
    { cx: 100, cy: 30, r: 2.5 },
    { cx: 140, cy: 50, r: 4 },
    { cx: 80, cy: 80, r: 2 },
    { cx: 120, cy: 90, r: 3.5 },
    { cx: 150, cy: 110, r: 2 },
    { cx: 50, cy: 120, r: 3 },
    { cx: 100, cy: 140, r: 2.5 },
    { cx: 160, cy: 150, r: 2 },
    { cx: 70, cy: 160, r: 3 },
    { cx: 130, cy: 170, r: 2 },
    { cx: 110, cy: 60, r: 2.5 },
  ]
  const lines = [
    [0, 1], [1, 2], [1, 4], [3, 4], [4, 5],
    [3, 6], [6, 7], [7, 8], [6, 9], [9, 10],
  ]

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
      viewport={{ once: true }}
    >
      {lines.map(([a, b], i) => (
        <line
          key={`line-${i}`}
          x1={stars[a].cx}
          y1={stars[a].cy}
          x2={stars[b].cx}
          y2={stars[b].cy}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.8"
          strokeDasharray="3 5"
        />
      ))}
      {stars.map((s, i) => (
        <circle
          key={`star-${i}`}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill="rgba(255,255,255,0.4)"
        />
      ))}
    </motion.svg>
  )
}

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

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center px-8 py-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — constellation detail */}
        <div className="flex flex-col items-center md:items-start">
          <MiniConstellation />
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-sm text-white/20 italic mt-4"
          >
            Harshith Minor
          </p>
        </div>

        {/* Right — content */}
        <div>
          <motion.p {...labelAnim} className="text-white/25 text-xs tracking-[0.3em] uppercase font-light mb-8">
            001 — about
          </motion.p>

          <motion.h2
            {...sectionAnim}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl text-white/85 font-light leading-tight tracking-tight italic"
          >
            Curious mind
            <br />
            building real-world
            <br />
            solutions.
          </motion.h2>

          <div className="w-8 h-px bg-white/10 my-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm leading-relaxed font-light"
          >
            3rd-year Computer Science student at Sai Vidya Institute of Technology, Bangalore. I
            work with Python, C, MySQL, and MongoDB — and I'm currently exploring Generative AI and
            Retrieval-Augmented Generation (RAG).
          </motion.p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                viewport={{ once: true }}
                className="section-panel panel-shimmer rounded-xl p-4"
              >
                <p className="text-white/25 text-xs tracking-widest uppercase mb-1">{stat.label}</p>
                <p className="text-white/60 text-sm font-light">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

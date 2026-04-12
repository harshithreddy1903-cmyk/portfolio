import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', dotColor: 'rgba(255,255,255,0.5)' },
  { name: 'C', dotColor: 'rgba(255,255,255,0.5)' },
  { name: 'DSA', dotColor: 'rgba(126,184,247,0.5)' },
  { name: 'OOP', dotColor: 'rgba(126,184,247,0.5)' },
  { name: 'MySQL', dotColor: 'rgba(126,184,247,0.5)' },
  { name: 'MongoDB', dotColor: 'rgba(126,184,247,0.5)' },
  { name: 'Generative AI', dotColor: 'rgba(167,139,250,0.4)' },
  { name: 'RAG', dotColor: 'rgba(167,139,250,0.4)' },
  { name: 'OpenCV', dotColor: 'rgba(167,139,250,0.4)' },
  { name: 'Operating Systems', dotColor: 'rgba(167,139,250,0.4)' },
]

// Orbit dots for each ring
const innerDots = [
  { angle: 0, color: 'rgba(255,255,255,0.5)' },
  { angle: 180, color: 'rgba(255,255,255,0.5)' },
]
const middleDots = [
  { angle: 45, color: 'rgba(126,184,247,0.5)' },
  { angle: 150, color: 'rgba(126,184,247,0.5)' },
  { angle: 270, color: 'rgba(126,184,247,0.5)' },
]
const outerDots = [
  { angle: 30, color: 'rgba(167,139,250,0.4)' },
  { angle: 120, color: 'rgba(167,139,250,0.4)' },
  { angle: 240, color: 'rgba(167,139,250,0.4)' },
]

function OrbitDot({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return <circle cx={cx} cy={cy} r={3} fill={color} />
}

function OrbitVisual() {
  const centre = 200
  const radii = [80, 140, 190]

  const getPos = (angle: number, radius: number) => ({
    x: centre + radius * Math.cos((angle * Math.PI) / 180),
    y: centre + radius * Math.sin((angle * Math.PI) / 180),
  })

  return (
    <div className="flex justify-center my-16">
      <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full">
        {/* Concentric dashed circles */}
        {radii.map((r, i) => (
          <g key={i} style={{ transformOrigin: 'center', animation: `orbit-spin ${60 + i * 20}s linear infinite` }}>
            <circle
              cx={centre}
              cy={centre}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
              strokeDasharray="2 8"
            />
          </g>
        ))}

        {/* Inner ring dots */}
        <g className="hidden md:block" style={{ transformOrigin: 'center', animation: 'orbit-spin 60s linear infinite' }}>
          {innerDots.map((dot, i) => {
            const pos = getPos(dot.angle, radii[0])
            return <OrbitDot key={`inner-${i}`} cx={pos.x} cy={pos.y} color={dot.color} />
          })}
        </g>

        {/* Middle ring dots */}
        <g className="hidden md:block" style={{ transformOrigin: 'center', animation: 'orbit-spin 80s linear infinite reverse' }}>
          {middleDots.map((dot, i) => {
            const pos = getPos(dot.angle, radii[1])
            return <OrbitDot key={`mid-${i}`} cx={pos.x} cy={pos.y} color={dot.color} />
          })}
        </g>

        {/* Outer ring dots */}
        <g className="hidden md:block" style={{ transformOrigin: 'center', animation: 'orbit-spin 100s linear infinite' }}>
          {outerDots.map((dot, i) => {
            const pos = getPos(dot.angle, radii[2])
            return <OrbitDot key={`outer-${i}`} cx={pos.x} cy={pos.y} color={dot.color} />
          })}
        </g>

        {/* Centre dot */}
        <circle cx={centre} cy={centre} r={4} fill="rgba(255,255,255,0.3)" />
      </svg>
    </div>
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

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-8 py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.p {...labelAnim} className="text-white/25 text-xs tracking-[0.3em] uppercase font-light mb-4">
          003 — skills
        </motion.p>
        <motion.h2
          {...sectionAnim}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-6xl text-white/80 font-light tracking-tight italic"
        >
          what i know.
        </motion.h2>

        {/* Orbit visual */}
        <OrbitVisual />

        {/* Skill grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true, margin: '-40px' }}
              className="section-panel panel-shimmer rounded-2xl p-4 text-center"
            >
              <div
                className="w-2 h-2 rounded-full mx-auto mb-3"
                style={{ background: skill.dotColor }}
              />
              <p className="text-white/50 text-sm font-light">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

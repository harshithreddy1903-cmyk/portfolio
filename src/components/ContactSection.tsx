import { motion } from 'framer-motion'
import { Mail, ExternalLink, Globe } from 'lucide-react'

const accentColors = ['#ffffff', '#e2e8f0', '#7eb8f7', '#a78bfa', '#34d399', '#fbbf24', '#f9a8d4']

const contactCards = [
  {
    dot: '#f9a8d4',
    icon: Mail,
    label: 'email',
    value: 'harshithreddy1903@gmail.com',
    href: 'mailto:harshithreddy1903@gmail.com',
  },
  {
    dot: '#e2e8f0',
    icon: ExternalLink,
    label: 'github',
    value: 'harshithreddy1903-cmyk',
    href: 'https://github.com/harshithreddy1903-cmyk',
  },
  {
    dot: '#7eb8f7',
    icon: Globe,
    label: 'linkedin',
    value: 'linkedin profile',
    href: 'https://bit.ly/47wTKYv',
  },
]

// Star burst decorative SVG
function StarBurst() {
  const rays = 8
  const radius = 50
  const centre = 60

  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="mx-auto mb-12"
      initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
      viewport={{ once: true }}
    >
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (i * 360) / rays
        const rad = (angle * Math.PI) / 180
        const x2 = centre + radius * Math.cos(rad)
        const y2 = centre + radius * Math.sin(rad)
        const dotColor = accentColors[i % accentColors.length]

        return (
          <g key={i}>
            <line
              x1={centre}
              y1={centre}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.5"
            />
            <circle cx={x2} cy={y2} r={1.5} fill={dotColor} fillOpacity="0.6" />
          </g>
        )
      })}
      {/* Centre dot */}
      <circle cx={centre} cy={centre} r={4} fill="rgba(255,255,255,0.4)" />
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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-8 py-32 text-center"
    >
      <StarBurst />

      <motion.p {...labelAnim} className="text-white/25 text-xs tracking-[0.3em] uppercase font-light mb-6">
        004 — contact
      </motion.p>

      <motion.h2
        {...sectionAnim}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-[10vw] leading-none tracking-tight text-white/80 font-light italic"
      >
        let's
        <br />
        connect.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white/25 text-sm font-light tracking-wide mt-6 mb-16"
      >
        Open to freelance projects, collaborations, and opportunities.
      </motion.p>

      {/* Contact cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-4xl">
        {contactCards.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.label !== 'email' ? '_blank' : undefined}
              rel={card.label !== 'email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="section-panel panel-shimmer rounded-2xl px-8 py-5 flex items-center gap-4 cursor-pointer group hover:border-white/15 transition-all duration-300 text-left flex-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: card.dot }} />
                <Icon size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
              <div>
                <p className="text-white/25 text-xs tracking-widest uppercase font-light">
                  {card.label}
                </p>
                <p className="text-white/55 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  {card.value}
                </p>
              </div>
            </motion.a>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/5 pt-8 w-full max-w-5xl flex justify-between items-center">
        <span className="text-white/15 text-xs tracking-widest font-light">
          © 2025 Harshith Reddy K M
        </span>
        <div className="flex gap-1.5">
          {accentColors.map((color, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full opacity-40"
              style={{ background: color }}
            />
          ))}
        </div>
        <span className="text-white/15 text-xs tracking-widest font-light">
          Bangalore, Karnataka, India
        </span>
      </div>
    </section>
  )
}

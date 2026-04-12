import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

interface StarNodeProps {
  left: string
  top: string
  color: string
  size: number
  label?: string
  target: string
  delay: number
  glowColor?: string
}

function StarNode({ left, top, color, size, label, target, delay, glowColor }: StarNodeProps) {
  return (
    <motion.div
      className="star-node"
      style={{
        position: 'absolute',
        left,
        top,
        transform: 'translate(-50%, -50%)',
        zIndex: 15,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }}
      onClick={() => scrollToSection(target)}
    >
      {/* Glow halo */}
      <div
        className="star-glow"
        style={{
          background: `radial-gradient(circle, ${glowColor || color}26 0%, transparent 70%)`,
        }}
      />
      {/* Star circle */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 ${size * 0.4}px ${size * 0.15}px ${color}4D, 0 0 ${size * 1.4}px ${size * 0.35}px ${color}14`,
        }}
      />
      {/* Pulse ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-8px',
          borderRadius: '50%',
          border: `0.5px solid ${color}26`,
          animation: 'pulse-ring 3s ease-out infinite',
        }}
      />
      {/* Label */}
      {label && (
        <span
          style={{
            position: 'absolute',
            top: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.35)',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      )}
    </motion.div>
  )
}

const constellationNodes = [
  { left: '50%', top: '45%', color: '#ffffff', size: 28, target: 'about', delay: 0, isCentre: true },
  { left: '28%', top: '30%', color: '#e2e8f0', size: 18, label: 'About', target: 'about', delay: 0.15 },
  { left: '68%', top: '25%', color: '#7eb8f7', size: 16, label: 'Study Bot', target: 'projects', delay: 0.3 },
  { left: '72%', top: '55%', color: '#a78bfa', size: 16, label: 'Kannada', target: 'projects', delay: 0.45 },
  { left: '38%', top: '68%', color: '#34d399', size: 16, label: 'FaceAuth', target: 'projects', delay: 0.6 },
  { left: '18%', top: '58%', color: '#fbbf24', size: 14, label: 'Skills', target: 'skills', delay: 0.75 },
  { left: '55%', top: '75%', color: '#f9a8d4', size: 14, label: 'Contact', target: 'contact', delay: 0.9 },
]

const constellationLines = [
  { x1: 50, y1: 45, x2: 28, y2: 30 },
  { x1: 28, y1: 30, x2: 68, y2: 25 },
  { x1: 68, y1: 25, x2: 72, y2: 55 },
  { x1: 72, y1: 55, x2: 38, y2: 68 },
  { x1: 38, y1: 68, x2: 18, y2: 58 },
  { x1: 18, y1: 58, x2: 55, y2: 75 },
]

export default function HeroSection() {
  const [hoveredCentre, setHoveredCentre] = useState(false)

  return (
    <section id="hero" className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="relative z-20 px-8 py-6 flex justify-between items-center">
        <span className="text-white/30 text-xs tracking-[0.3em] font-light">HK</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 animate-pulse" />
          <span className="text-white/25 text-xs tracking-widest font-light">available for work</span>
        </div>
      </nav>

      {/* Constellation SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {constellationLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.15"
            className="constellation-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
          />
        ))}
      </svg>

      {/* Star nodes */}
      <div className="absolute inset-0 z-10">
        {constellationNodes.map((node, i) =>
          node.isCentre ? (
            <motion.div
              key={i}
              className="star-node"
              style={{
                position: 'absolute',
                left: node.left,
                top: node.top,
                transform: 'translate(-50%, -50%)',
                zIndex: 15,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] as const }}
              onMouseEnter={() => setHoveredCentre(true)}
              onMouseLeave={() => setHoveredCentre(false)}
              onClick={() => scrollToSection('about')}
            >
              <div
                className="star-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                }}
              />
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow:
                    '0 0 12px 4px rgba(255,255,255,0.3), 0 0 40px 10px rgba(255,255,255,0.08)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  animation: 'pulse-ring 3s ease-out infinite',
                }}
              />

              {/* Centre tooltip */}
              <AnimatePresence>
                {hoveredCentre && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="section-panel panel-shimmer rounded-2xl px-6 py-4 text-center"
                    style={{
                      position: 'absolute',
                      bottom: '140%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                    }}
                  >
                    <p
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-xl text-white/80 font-light italic"
                    >
                      Harshith Reddy K M
                    </p>
                    <p className="text-xs text-white/35 tracking-widest uppercase mt-1">
                      CS Student · Freelancer
                    </p>
                    <p className="text-xs text-white/25 mt-1">Bangalore, India</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <StarNode key={i} {...node} />
          )
        )}
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-white/15 text-xs tracking-[0.3em] uppercase font-light">
          hover stars to explore · click to navigate
        </p>
        <div className="mt-3 flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={14} className="text-white/15" />
            <ChevronDown size={14} className="text-white/10 -mt-2" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

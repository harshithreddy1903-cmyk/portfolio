import { useEffect, useRef, useCallback } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
  color: string
}

function generateStars(w: number, h: number, count: number): Star[] {
  const stars: Star[] = []
  for (let i = 0; i < count; i++) {
    const colorRoll = Math.random()
    let color = '#ffffff'
    if (colorRoll > 0.9) color = '#ffd9b3'
    else if (colorRoll > 0.8) color = '#b3d4ff'

    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 0.3 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.6,
      twinkleSpeed: 0.003 + Math.random() * 0.009,
      twinkleOffset: Math.random() * Math.PI * 2,
      color,
    })
  }
  return stars
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animIdRef = useRef<number>(0)
  const scrollRef = useRef(0)

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    starsRef.current = generateStars(canvas.width, canvas.height, 280)
  }, [])

  useEffect(() => {
    initCanvas()

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const now = Date.now()

      starsRef.current.forEach((star) => {
        const alpha =
          star.opacity * (0.5 + 0.5 * Math.sin(now * star.twinkleSpeed + star.twinkleOffset))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animIdRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      starsRef.current = generateStars(canvas.width, canvas.height, 280)
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
      canvas.style.transform = `translateY(${scrollRef.current * 0.15}px)`
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animIdRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [initCanvas])

  return (
    <>
      {/* Star field canvas - fixed behind everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      />

      {/* All content above the canvas */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  )
}

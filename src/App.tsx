import { useEffect, useRef } from 'react'
import { MotionConfig, useReducedMotion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let frame = 0
    let stars: Array<{ x: number; y: number; radius: number; alpha: number; phase: number }> = []
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      stars = Array.from({ length: window.innerWidth < 640 ? 80 : 180 }, () => ({
        x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
        radius: 0.4 + Math.random(), alpha: 0.12 + Math.random() * 0.35, phase: Math.random() * Math.PI * 2,
      }))
      paint(0)
    }
    const paint = (time: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const star of stars) {
        ctx.globalAlpha = reduceMotion ? star.alpha : star.alpha * (0.75 + Math.sin(time * 0.0004 + star.phase) * 0.25)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#dce6ff'
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }
    const animate = (time: number) => {
      if (!document.hidden) paint(time)
      frame = window.requestAnimationFrame(animate)
    }
    resize()
    if (!reduceMotion) frame = window.requestAnimationFrame(animate)
    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [reduceMotion])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </MotionConfig>
  )
}

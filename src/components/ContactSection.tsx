import { motion, useReducedMotion } from 'framer-motion'
import { Mail, ExternalLink, Globe, Download, ArrowUpRight } from 'lucide-react'

const contacts = [
  { label: 'Email', value: 'harshithreddy1903@gmail.com', href: 'mailto:harshithreddy1903@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'harshithreddy1903-cmyk', href: 'https://github.com/harshithreddy1903-cmyk', icon: ExternalLink },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://11nk.dev/5wmwt4s', icon: Globe },
]

export default function ContactSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="contact" className="relative z-10 px-6 pt-20 pb-8 md:px-8 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12 text-center md:py-20">
          <p className="section-kicker">004 / get in touch</p>
          <h2 className="display-font text-6xl font-light tracking-tight text-white/90 italic md:text-8xl">Let's build<br />something useful.</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60">I'm looking for software engineering and full-stack internships, and opportunities to learn through meaningful projects.</p>
          <a href="/Harshith_Reddy_Resume.pdf" download className="secondary-action mt-7">Download my resume <Download size={15} aria-hidden="true" /></a>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'} className="section-panel panel-shimmer group flex min-w-0 items-start gap-4 rounded-2xl p-5 transition-colors hover:border-blue-200/35">
              <Icon size={18} className="mt-0.5 shrink-0 text-blue-200/75" aria-hidden="true" />
              <div className="min-w-0"><p className="text-[10px] tracking-[0.2em] text-white/50 uppercase">{label}</p><p className="mt-2 break-words text-sm leading-relaxed text-white/80">{value}</p></div>
              <ArrowUpRight size={14} className="ml-auto shrink-0 text-white/40" aria-hidden="true" />
            </a>
          ))}
        </div>
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45">
          <span>Harshith Reddy K M</span><span>Bangalore, Karnataka, India</span><a href="#hero" className="text-white/60 hover:text-white">Back to the stars ↑</a>
        </footer>
      </div>
    </section>
  )
}

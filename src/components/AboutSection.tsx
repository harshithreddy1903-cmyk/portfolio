import { motion } from 'framer-motion'

const details = [
  {
    label: 'Education',
    title: 'B.E. in Computer Science & Engineering',
    description: 'Data Science · Final year · Expected 2027',
    note: 'Sai Vidya Institute of Technology, Bangalore',
  },
  {
    label: 'Certification',
    title: 'Machine Learning Specialization',
    description: 'Stanford University & DeepLearning.AI · Coursera',
    note: 'Completed the three-course specialization.',
  },
  {
    label: 'Leadership',
    title: 'PR Team Lead · Big-O',
    description: 'Competitive coding club',
    note: 'Contributed to outreach and sponsor coordination.',
  },
]

function MiniConstellation() {
  const stars = [
    { cx: 25, cy: 45, r: 2 },
    { cx: 74, cy: 27, r: 3 },
    { cx: 122, cy: 47, r: 2 },
    { cx: 98, cy: 91, r: 3.5 },
    { cx: 164, cy: 101, r: 2.5 },
    { cx: 42, cy: 120, r: 2 },
  ]
  const lines = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [3, 5]]

  return (
    <svg aria-hidden="true" viewBox="0 0 190 145" className="h-24 w-32 sm:h-28 sm:w-36">
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={stars[a].cx}
          y1={stars[a].cy}
          x2={stars[b].cx}
          y2={stars[b].cy}
          stroke="rgba(126,184,247,0.25)"
          strokeWidth="0.8"
          strokeDasharray="3 5"
        />
      ))}
      {stars.map((star, i) => (
        <circle key={i} {...star} fill="rgba(191,214,255,0.75)" />
      ))}
    </svg>
  )
}

const sectionAnim = {
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, margin: '-40px' },
}

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
        <motion.div {...sectionAnim}>
          <p className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-white/55">
            001 — about
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl font-light italic leading-tight tracking-tight text-white/90 sm:text-6xl"
          >
            Curious mind.
            <br />
            Practical solutions.
          </h2>
          <div className="my-7 h-px w-10 bg-white/20" />
          <p className="text-base font-light leading-7 text-white/75">
            I’m Harshith, a final-year computer science student focused on software engineering,
            full-stack development and applied machine learning. I’m looking for internship
            opportunities where I can build useful products and learn with a team.
          </p>
          <p className="mt-4 text-base font-light leading-7 text-white/75">
            My latest project, MandiPulse, combines React, FastAPI, Supabase and the Gemini API
            to help people compare official crop-price records and prepare buying plans.
            I’ve also contributed to team projects in Kannada language processing and
            manuscript translation.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <MiniConstellation />
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">Languages I speak</p>
              <p className="text-sm leading-6 text-white/75">Kannada · Telugu · English</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:pt-10">
          {details.map((detail, i) => (
            <motion.article
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-30px' }}
              className="section-panel panel-shimmer rounded-2xl p-5 sm:p-6"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/55">{detail.label}</p>
              <h3 className="text-base font-medium leading-6 text-white/90">{detail.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{detail.description}</p>
              <p className="mt-1 text-sm leading-6 text-white/65">{detail.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

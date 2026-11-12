import { motion } from 'framer-motion'

const skillGroups = [
  {
    name: 'Programming languages',
    description: 'The languages I use to build and solve problems.',
    skills: ['Python', 'JavaScript', 'SQL', 'C'],
    color: 'rgba(191,214,255,0.8)',
  },
  {
    name: 'Frontend',
    description: 'Interfaces for clear, approachable web experiences.',
    skills: ['React', 'HTML', 'CSS', 'Vite'],
    color: 'rgba(126,184,247,0.8)',
  },
  {
    name: 'Backend & APIs',
    description: 'Application logic, integrations and authentication.',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'Gemini API', 'Supabase Auth'],
    color: 'rgba(167,139,250,0.8)',
  },
  {
    name: 'Databases',
    description: 'Working with structured data and retrieval.',
    skills: ['PostgreSQL (Supabase)', 'MySQL', 'SQLite', 'ChromaDB', 'Row-Level Security'],
    color: 'rgba(126,184,247,0.8)',
  },
  {
    name: 'AI & machine learning',
    description: 'Tools used across learning and project work.',
    skills: ['PyTorch', 'TensorFlow', 'NumPy', 'scikit-learn', 'OpenCV', 'RAG'],
    color: 'rgba(167,139,250,0.8)',
  },
  {
    name: 'Tools & delivery',
    description: 'From version control to deployed applications.',
    skills: ['Git', 'Vercel', 'Postman', 'Automated testing'],
    color: 'rgba(191,214,255,0.8)',
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <p className="mb-5 text-xs font-light uppercase tracking-[0.3em] text-white/55">
            003 — skills
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl font-light italic tracking-tight text-white/90 sm:text-6xl"
          >
            My working toolkit.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-7 text-white/70">
            Technologies I’ve worked with through projects and coursework, grouped by how I use them.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              viewport={{ once: true, margin: '-30px' }}
              className="section-panel panel-shimmer rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: group.color }} />
                <h3 className="text-base font-medium text-white/90">{group.name}</h3>
              </div>
              <p className="mt-3 text-sm font-light leading-6 text-white/65">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.name}>
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-sm leading-5 text-white/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-30px' }}
          className="section-panel panel-shimmer mt-4 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <h3 className="text-base font-medium text-white/90">Computer science foundations</h3>
            <p className="mt-2 text-sm font-light leading-6 text-white/65">The fundamentals behind the tools.</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Computer science foundations">
            <li className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/80">Data Structures & Algorithms</li>
            <li className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/80">Object-Oriented Programming</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

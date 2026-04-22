'use client'

import { motion } from 'framer-motion'
import { Search, FileSearch, HandCoins } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Identifier',
    description:
      'Nous détectons les héritages non transmis grâce à nos bases de données et partenaires institutionnels.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Rechercher',
    description:
      'Nous menons des recherches approfondies pour identifier précisément les actifs et les ayants droit.',
  },
  {
    number: '03',
    icon: HandCoins,
    title: 'Restituer',
    description:
      "Nous accompagnons jusqu'à la restitution des actifs, dans un cadre légal sécurisé par des notaires.",
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Notre méthode
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight leading-tight">
            Notre approche en 3 étapes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-w-xl">
            Un processus rigoureux, transparent et encadré, du premier contact
            jusqu'à la restitution des actifs.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative bg-surface rounded-lg p-7 md:p-8 border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-secondary">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.14em] text-accent/80">
                    ÉTAPE {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-foreground tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "Au début, je pensais à une arnaque. Finalement, j'ai pu récupérer un héritage auquel je ne m'attendais pas. L'équipe a été d'une transparence totale.",
    name: 'Françoise L.',
    location: 'Bordeaux',
  },
  {
    quote:
      "Le cabinet m'a accompagnée avec beaucoup de pédagogie. Chaque étape a été expliquée et validée par leur notaire. Un vrai travail de professionnels.",
    name: 'Henri D.',
    location: 'Lyon',
  },
  {
    quote:
      "Nous avons découvert un parent éloigné dont nous ignorions l'existence. La restitution s'est faite dans un cadre parfaitement encadré.",
    name: 'Marie-Claire V.',
    location: 'Nantes',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-28 md:py-40 border-t border-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Témoignages
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Ce que disent les héritiers que nous accompagnons
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative bg-surface rounded-lg p-7 md:p-8 border border-border shadow-soft flex flex-col"
            >
              <Quote
                size={28}
                className="text-accent/30 flex-shrink-0"
                strokeWidth={1.5}
              />
              <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground flex-grow">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/70">
                <div className="text-sm font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted mt-0.5">{t.location}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

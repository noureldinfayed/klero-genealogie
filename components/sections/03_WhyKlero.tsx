'use client'

import { motion } from 'framer-motion'
import { CircleDollarSign, Gavel, BookOpen, Lock } from 'lucide-react'

const BLOCKS = [
  {
    icon: CircleDollarSign,
    title: 'Zéro frais sans résultat',
    description:
      'Nos honoraires sont uniquement prélevés sur les actifs effectivement restitués. Aucune avance, aucun engagement financier.',
  },
  {
    icon: Gavel,
    title: 'Supervision notariale',
    description:
      'Chaque dossier est encadré et validé par un notaire, garantissant la conformité légale et la sécurité de la succession.',
  },
  {
    icon: BookOpen,
    title: 'Expertise juridique',
    description:
      'Plus de quinze ans d\'expérience en droit des successions, avec des généalogistes et juristes dédiés à votre dossier.',
  },
  {
    icon: Lock,
    title: 'Confidentialité totale',
    description:
      'Vos données et votre situation familiale sont protégées par le secret professionnel et un dispositif RGPD strict.',
  },
]

export default function WhyKlero() {
  return (
    <section id="why" className="bg-surface py-20 md:py-28">
      <div className="max-w-container mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Pourquoi Klero
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight leading-tight">
            Une expertise reconnue au service des héritiers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-w-xl">
            Quatre engagements concrets qui font de Klero un partenaire de
            confiance pour les successions complexes.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-background rounded-lg p-7 md:p-8 border border-border/70 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/8 text-primary flex-shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {block.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

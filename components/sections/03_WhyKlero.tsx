import { CircleDollarSign, Gavel, BookOpen, Lock } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

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
      "Plus de quinze ans d'expérience en droit des successions, avec des généalogistes et juristes dédiés à votre dossier.",
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
    <section id="why" className="bg-surface py-28 md:py-40 border-t border-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Pourquoi Klero
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Une expertise reconnue au service des héritiers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-w-xl">
            Quatre engagements concrets qui font de Klero un partenaire de
            confiance pour les successions complexes.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon
            return (
              <Reveal
                key={block.title}
                delay={i * 80}
                className="bg-background rounded-lg p-7 md:p-8 border border-border shadow-soft hover:shadow-soft-lg"
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

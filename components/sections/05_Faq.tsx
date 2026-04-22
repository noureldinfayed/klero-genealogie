'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: 'Pourquoi ai-je été contacté ?',
    answer:
      "Vous avez été identifié comme héritier potentiel d'une succession en cours de traitement. Nos recherches, menées à partir d'informations transmises par un notaire ou un établissement dépositaire d'actifs, ont permis de remonter jusqu'à vous. Le contact initial vise uniquement à vous informer de l'existence d'un dossier vous concernant.",
  },
  {
    question: 'Est-ce une arnaque ?',
    answer:
      "Non. Klero Généalogie est un cabinet agréé qui intervient exclusivement à la demande de notaires ou d'institutions financières. Nous ne demandons jamais de paiement préalable, ni de coordonnées bancaires, ni de documents d'identité sans rendez-vous formel. Vous pouvez à tout moment vérifier notre identité auprès du notaire en charge du dossier.",
  },
  {
    question: 'Comment êtes-vous rémunérés ?',
    answer:
      "Nos honoraires sont exclusivement prélevés sur les actifs effectivement restitués, en pourcentage de ceux-ci. Ce taux est fixé par un contrat de révélation de succession, signé avec vous avant toute action. Si aucun actif n'est restitué, vous ne payez strictement rien.",
  },
  {
    question: 'Combien de temps cela prend-il ?',
    answer:
      "La durée d'un dossier varie en fonction de sa complexité — nombre d'héritiers, nature des actifs, recherches généalogiques nécessaires. En moyenne, un dossier est traité entre six et dix-huit mois. Nous vous tenons informé à chaque étape importante.",
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (panelRef.current) setHeight(panelRef.current.scrollHeight)
  }, [isOpen, answer])

  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-md border border-border text-primary flex-shrink-0 mt-0.5 transition-transform duration-300',
            isOpen && 'rotate-45'
          )}
        >
          <Plus size={16} strokeWidth={2} />
        </span>
      </button>
      <div
        style={{ maxHeight: isOpen ? height : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        aria-hidden={!isOpen}
      >
        <div ref={panelRef}>
          <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-surface py-28 md:py-40 border-t border-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Vos questions
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted max-w-md">
              Les réponses aux interrogations les plus courantes après un
              premier contact avec notre cabinet.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Une autre question&nbsp;? Écrivez-nous →
            </a>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

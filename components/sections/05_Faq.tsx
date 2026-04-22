'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-surface py-28 md:py-40 border-t border-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
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
          </motion.div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <li key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    >
                      <span className="text-[16px] md:text-[17px] font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-primary flex-shrink-0 mt-0.5"
                      >
                        <Plus size={16} strokeWidth={2} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

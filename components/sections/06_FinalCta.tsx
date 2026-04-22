'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function FinalCta() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-xl bg-primary text-secondary px-6 py-14 md:px-14 md:py-20"
        >
          {/* Subtle texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.4) 1px, transparent 1.5px), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.3) 1px, transparent 1.5px)',
              backgroundSize: '220px 220px, 180px 180px',
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary/70">
                <ShieldCheck size={14} />
                Vérification sécurisée
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-[38px] font-semibold leading-tight tracking-tight text-secondary max-w-2xl">
                Vous avez été contacté par Klero&nbsp;?
                <br />
                <span className="text-secondary/75 font-normal">
                  Vérifiez votre situation en toute sécurité.
                </span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-secondary/75 leading-relaxed max-w-xl">
                Prenez rendez-vous pour un échange confidentiel. Nos équipes
                répondent sous 48h et vous orientent vers le notaire en charge
                de votre dossier.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:contact@klero-genealogie.fr"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-secondary text-primary text-[15px] font-semibold shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Nous contacter
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Users, Scale } from 'lucide-react'

const TRUST_POINTS = [
  { icon: ShieldCheck, label: 'Aucun frais sans résultat' },
  { icon: Users, label: '+1000 héritiers accompagnés' },
  { icon: Scale, label: 'Encadrement par des notaires' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-secondary"
    >
      {/* Subtle network / star background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.3) 1px, transparent 1.5px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.35) 1px, transparent 1.5px), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.3) 1px, transparent 1.5px)',
          backgroundSize: '240px 240px, 180px 180px, 320px 320px, 260px 260px',
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="net" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 L80 40 M40 0 L40 80" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#net)" />
      </svg>

      <div className="relative max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 pt-32 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary/70 border border-secondary/25 rounded-full px-3.5 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
              Cabinet de généalogie successorale
            </motion.span>

            <h1 className="mt-7 text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-tight text-secondary">
              Retrouver un{' '}
              <span className="italic font-normal text-secondary/95">
                héritage oublié
              </span>
              .
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-secondary/75 max-w-xl">
              Nous identifions et récupérons les actifs non transmis lors des
              successions, en collaboration avec les notaires.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-secondary text-primary text-[15px] font-semibold shadow-soft hover:-translate-y-0.5 hover:shadow-soft-lg transition-all duration-200"
              >
                Nous contacter
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-secondary/35 text-secondary text-[15px] font-semibold hover:bg-secondary/10 transition-colors duration-200"
              >
                Comment ça marche
              </a>
            </div>

            {/* Trust points */}
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 border-t border-secondary/15 pt-8">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-sm text-secondary/85"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary/10 text-secondary flex-shrink-0">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="leading-snug pt-0.5">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/4] lg:aspect-[6/5] rounded-xl overflow-hidden shadow-soft-lg ring-1 ring-secondary/10">
              <Image
                src="/images/ui/hero-background.webp"
                alt="Stack of official notarial documents and inheritance registers"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              {/* Soft tint blend with hero bg */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-background text-foreground rounded-lg shadow-soft-lg px-5 py-4 max-w-[280px]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/8 text-primary flex-shrink-0">
                <ShieldCheck size={18} strokeWidth={1.75} />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Cadre légal
                </div>
                <div className="text-sm font-medium text-foreground">
                  Encadrement notarial garanti
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom seam to white sections */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-secondary/10" />
    </section>
  )
}

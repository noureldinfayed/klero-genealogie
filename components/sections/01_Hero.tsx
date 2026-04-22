import Image from 'next/image'
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
      className="relative overflow-hidden bg-primary text-secondary min-h-[92vh] flex items-center"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/ui/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent"
      />

      <div className="relative w-full max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 pt-28 md:pt-32 pb-28 md:pb-40">
        <div className="max-w-2xl lg:max-w-3xl animate-[rise_0.8s_cubic-bezier(0.25,0.1,0.25,1)_both]">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary/70 border border-secondary/25 rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
            Cabinet de généalogie successorale
          </span>

          <h1 className="mt-7 text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-semibold leading-[1.05] tracking-tight text-secondary">
            Retrouver un{' '}
            <span className="italic font-normal text-secondary/95">
              héritage oublié
            </span>
            .
          </h1>

          <p className="mt-7 text-base md:text-lg lg:text-xl leading-relaxed text-secondary/80 max-w-2xl">
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

          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 border-t border-secondary/20 pt-8 max-w-2xl">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 text-sm text-secondary/90"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary/10 text-secondary flex-shrink-0">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span className="leading-snug pt-0.5">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-secondary/10" />
    </section>
  )
}

import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/ui/Logo'

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Comment ça marche', href: '#process' },
  { label: 'Pourquoi Klero', href: '#why' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
  { label: 'RGPD', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo variant="light" />
            <p className="text-sm text-secondary/70 leading-relaxed max-w-sm">
              Cabinet de généalogie successorale. Nous identifions et récupérons
              les actifs non transmis lors des successions, en collaboration
              avec les notaires.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-secondary/25 text-secondary/80 hover:bg-secondary hover:text-primary hover:border-secondary transition-colors duration-200"
              >
                <LinkedInIcon size={16} />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/50 mb-2">
              Navigation
            </h3>
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-secondary/75 hover:text-secondary transition-colors duration-200 w-fit"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/50 mb-2">
              Contact
            </h3>

            <a
              href="mailto:contact@klero-genealogie.fr"
              className="flex items-center gap-2.5 text-sm text-secondary/75 hover:text-secondary transition-colors duration-200 w-fit"
            >
              <Mail size={15} className="flex-shrink-0" />
              contact@klero-genealogie.fr
            </a>

            <a
              href="tel:+33100000000"
              className="flex items-center gap-2.5 text-sm text-secondary/75 hover:text-secondary transition-colors duration-200 w-fit"
            >
              <Phone size={15} className="flex-shrink-0" />
              +33 1 00 00 00 00
            </a>

            <p className="flex items-start gap-2.5 text-sm text-secondary/75 leading-relaxed">
              <MapPin size={15} className="flex-shrink-0 mt-0.5" />
              <span>
                Paris, France
                <br />
                Cabinet sur rendez-vous uniquement
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary/10">
        <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-xs text-secondary/55">
            © {currentYear} Klero Généalogie. Tous droits réservés.
          </span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-secondary/55 hover:text-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

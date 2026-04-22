'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { cn } from '@/lib/utils'

const SCROLL_THRESHOLD = 40

const NAV_LINKS = [
  { label: 'Comment ça marche', href: '#process' },
  { label: 'Pourquoi Klero', href: '#why' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { scrollY } = useScrollDirection({ threshold: 10 })
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = scrollY > SCROLL_THRESHOLD

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-smooth',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,45,85,0.08)]'
            : 'bg-background/80 backdrop-blur-sm'
        )}
      >
        <div className="max-w-container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
          <div className="flex items-center justify-between h-[60px] md:h-[68px]">
            <a
              href="#top"
              className="flex-shrink-0"
              aria-label="Klero Généalogie — Accueil"
            >
              <Logo />
            </a>

            <nav
              className="hidden lg:flex items-center gap-9"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-secondary text-[14px] font-semibold shadow-soft hover:-translate-y-0.5 hover:opacity-95 transition-all duration-200"
              >
                Nous contacter
              </a>
            </nav>

            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav
              className="flex flex-col px-6 py-8 gap-2"
              aria-label="Navigation mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="py-4 border-b border-border text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.25 }}
                className="mt-6 inline-flex items-center justify-center py-4 rounded-lg bg-primary text-secondary text-base font-semibold shadow-soft"
                onClick={() => setMenuOpen(false)}
              >
                Nous contacter
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

// ─── KLERO LOGO ────────────────────────────────────────────────────────────
// Uses the client-supplied PNG as a CSS mask so the mark and wordmark can
// be rendered in either navy (dark) or white (light) via a single source.
export default function Logo({ className, variant = 'dark' }: LogoProps) {
  const color = variant === 'light' ? '#FFFFFF' : 'var(--color-primary)'

  return (
    <span
      className={cn('inline-block h-10 w-[150px] md:h-11 md:w-[165px]', className)}
      role="img"
      aria-label="Klero Généalogie"
      style={{
        backgroundColor: color,
        WebkitMaskImage: 'url(/images/ui/klero-logo.png)',
        maskImage: 'url(/images/ui/klero-logo.png)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center',
        maskPosition: 'left center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}

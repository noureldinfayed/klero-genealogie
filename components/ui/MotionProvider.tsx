'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

// Loads Framer Motion's DOM animation feature set lazily, which cuts
// ~20KB off the initial JS vs importing the full `motion` component.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

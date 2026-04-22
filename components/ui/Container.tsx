import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
}

// Max 1200px, centered, with generous horizontal breathing room on wide screens.
export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'max-w-container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16',
        className
      )}
    >
      {children}
    </Tag>
  )
}

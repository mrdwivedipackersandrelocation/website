'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase',
          tone === 'light' ? 'bg-accent/15 text-primary' : 'bg-white/10 text-accent',
        )}
      >
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={cn(
          'mt-4 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl',
          tone === 'light' ? 'text-primary' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            tone === 'light' ? 'text-muted-foreground' : 'text-white/70',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}

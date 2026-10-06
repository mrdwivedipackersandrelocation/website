'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type Testimonial = {
  name: string
  role: string
  route: string
  quote: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: '3 BHK Home Relocation',
    route: 'Noida → Pune',
    initials: 'PS',
    quote:
      'Absolutely flawless experience. The team packed our entire 3 BHK in a single day and not a single glass was broken. The move manager kept me updated at every step. Truly premium service.',
  },
  {
    name: 'Rajesh Malhotra',
    role: 'Director, Finlytics Pvt. Ltd.',
    route: 'Gurugram → Bengaluru',
    initials: 'RM',
    quote:
      'We moved a 120-seat office over a weekend and were operational by Monday 9 AM. Every workstation was labelled and set up exactly as planned. Mr. Dwivedi is now our go-to partner.',
  },
  {
    name: 'Ananya Iyer',
    role: 'Car Transportation',
    route: 'Delhi → Chennai',
    initials: 'AI',
    quote:
      'I was nervous about shipping my new car across the country, but it arrived spotless in an enclosed carrier, two days earlier than promised. The live tracking was a great touch.',
  },
  {
    name: 'Vikram Singh',
    role: 'Warehousing & Storage',
    route: 'Lucknow',
    initials: 'VS',
    quote:
      'Stored our household goods for four months during renovation. The facility was clean, secure and the retrieval was quick. Transparent pricing with no hidden charges at all.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next: number) => {
    setDirection(next > 0 ? 1 : -1)
    setIndex((current) => (current + next + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [go, paused])

  const active = testimonials[index]

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="reviews-heading"
          eyebrow="Testimonials"
          title="Loved by families and businesses alike"
          description="Don't just take our word for it — here's what our customers say after their move."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-white lg:col-span-4">
            <div>
              <p className="font-display text-6xl font-semibold">4.9</p>
              <div className="mt-3 flex gap-1" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-white/70">Based on 3,200+ verified Google reviews</p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-sm text-white/60">Repeat customers</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent">68%</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Damage-free moves</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent">99.6%</dd>
              </div>
            </dl>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_rgba(15,27,61,0.3)] md:p-12 lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Customer reviews"
          >
            <Quote className="absolute top-8 right-8 size-24 text-accent/15" aria-hidden="true" />

            <div className="relative min-h-[260px] md:min-h-[220px]" aria-live={paused ? 'polite' : 'off'}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={active.name}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${testimonials.length}`}
                >
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl leading-relaxed font-medium text-pretty text-primary md:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-navy-deep font-display text-sm font-semibold text-accent">
                      {active.initials}
                    </span>
                    <span>
                      <span className="block font-bold text-primary">{active.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {active.role} · {active.route}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => {
                      setDirection(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    aria-label={`Show review from ${t.name}`}
                    aria-current={i === index}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground/40',
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                  <span className="sr-only">Previous review</span>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="flex size-11 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                  <span className="sr-only">Next review</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

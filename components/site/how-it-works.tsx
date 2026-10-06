'use client'

import { motion } from 'motion/react'
import { ClipboardList, Package, Sofa, Truck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Step = { icon: LucideIcon; title: string; description: string }

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Request a Quote',
    description: 'Share your move details and get a transparent, no-obligation estimate within minutes.',
  },
  {
    icon: Package,
    title: 'We Pack',
    description: 'Our trained crew arrives on time with premium materials and packs everything securely.',
  },
  {
    icon: Truck,
    title: 'Safe Transport',
    description: 'Your goods travel in our GPS-tracked, sanitised fleet with full transit insurance.',
  },
  {
    icon: Sofa,
    title: 'Unpack & Settle',
    description: 'We unload, unpack and reassemble furniture so you can settle in stress-free.',
  },
]

export function HowItWorks() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-navy-deep py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.36_0.1_262/0.7),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          tone="dark"
          eyebrow="How It Works"
          title="Your move, in four effortless steps"
          description="A proven process refined over 25,000+ relocations — so you always know what happens next."
        />

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-white/15 lg:block"
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-accent to-accent/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative">
                <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-navy-deep text-accent shadow-lg shadow-black/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  <step.icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="absolute -top-2 -right-2 z-20 flex size-7 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{step.description}</p>
            </motion.li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

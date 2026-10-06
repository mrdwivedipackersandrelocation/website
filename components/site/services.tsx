'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Building2, Car, Home, Warehouse, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Home Relocation',
    description: 'End-to-end household shifting with premium multi-layer packing for every item you own.',
    features: ['Furniture dismantling', 'Fragile item care', 'Doorstep unpacking'],
  },
  {
    icon: Building2,
    title: 'Corporate & Office Shifting',
    description: 'Zero-downtime office moves planned around your business hours, weekends included.',
    features: ['IT asset handling', 'Labelled workstations', 'Weekend execution'],
  },
  {
    icon: Car,
    title: 'Vehicle Transportation',
    description: 'Enclosed car carriers and custom bike crates for scratch-free, door-to-door delivery.',
    features: ['Enclosed carriers', 'Real-time tracking', 'Pan-India network'],
  },
  {
    icon: Warehouse,
    title: 'Secure Warehousing',
    description: 'Climate-aware, CCTV-monitored storage for short or long durations at flexible rates.',
    features: ['24/7 surveillance', 'Pest-controlled units', 'Flexible duration'],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Relocation solutions crafted for every move"
          description="Whether it's your family home, your company HQ or your prized car — our trained crew handles it like it's their own."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_2px_20px_-8px_rgba(15,27,61,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_30px_60px_-20px_rgba(15,27,61,0.35)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-0 bg-gradient-to-br from-primary to-navy-deep opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent">
                      <service.icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-muted-foreground/60 transition-colors group-hover:text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-primary transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm font-medium text-primary/80 transition-colors duration-500 group-hover:text-white/85"
                      >
                        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#estimate"
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-bold text-primary transition-colors duration-500 group-hover:text-accent"
                  >
                    Get a quote
                    <span className="sr-only"> for {service.title}</span>
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

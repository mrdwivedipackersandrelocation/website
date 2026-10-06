'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Clock, Headset, PackageCheck, ShieldCheck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Badge = { icon: LucideIcon; title: string; description: string }

const badges: Badge[] = [
  {
    icon: PackageCheck,
    title: '100% Safe Handling',
    description: 'Multi-layer packing with bubble wrap, corrugated sheets and custom wooden crates.',
  },
  {
    icon: Clock,
    title: 'On-time Delivery',
    description: '98.7% of shipments delivered on or before the committed date.',
  },
  {
    icon: ShieldCheck,
    title: 'Transit Insurance',
    description: 'Comprehensive coverage so your belongings are protected door to door.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'A dedicated move manager reachable by call or WhatsApp, any hour.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
            <Image
              src="/images/packing-team.png"
              alt="Packers wrapping fragile glassware and framed art with protective bubble wrap"
              width={1000}
              height={1100}
              className="aspect-[4/4.4] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-8 rounded-3xl bg-primary p-6 text-white shadow-2xl sm:-right-8 sm:p-8">
            <p className="font-display text-5xl font-semibold text-accent">15+</p>
            <p className="mt-1 max-w-[10rem] text-sm leading-snug text-white/75">
              Years of trusted moving across India
            </p>
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 -z-10 size-40 rounded-[2rem] bg-[radial-gradient(circle,oklch(0.76_0.16_62/0.5)_1.5px,transparent_1.5px)] bg-[size:14px_14px]"
          />
        </motion.div>

        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow="Why Choose Us"
            title="A moving partner you can trust completely"
            description="Founded on the values of honesty and care, Mr. Dwivedi Packers and Relocation has grown into one of India's most dependable moving brands — powered by trained crews, an owned fleet and obsessive attention to detail."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {badges.map((badge, i) => (
              <motion.li
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-5 shadow-[0_2px_20px_-10px_rgba(15,27,61,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-20px_rgba(15,27,61,0.3)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-primary transition-colors duration-300 group-hover:bg-accent">
                  <badge.icon className="size-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-primary">{badge.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{badge.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

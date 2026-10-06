'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Star } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const highlights = ['Free pre-move survey', 'Transparent pricing', 'GPS-tracked fleet']

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-navy-deep pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,oklch(0.36_0.1_262/0.9),transparent_70%)]" />
        <motion.div
          className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-accent/20 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 size-[32rem] rounded-full bg-[oklch(0.45_0.15_262)]/40 blur-[140px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 text-sm text-white/80 backdrop-blur"
          >
            <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
              <Star className="size-3 fill-current" aria-hidden="true" />
              4.9
            </span>
            Rated by 12,000+ happy families
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
          >
            Seamless & Secure Relocation with{' '}
            <span className="bg-gradient-to-r from-accent via-[oklch(0.84_0.14_75)] to-accent bg-clip-text text-transparent">
              Mr. Dwivedi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/70 md:text-xl"
          >
            {"India's most trusted packing and moving experts."} From a single room to an entire office,
            we move what matters with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#estimate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/40"
            >
              Book Now
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/75">
                <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/hero-movers.png"
              alt="Mr. Dwivedi uniformed movers loading wrapped furniture into a moving truck"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.7, duration: 0.6 },
              x: { delay: 0.7, duration: 0.6 },
              y: { delay: 1.3, duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:-left-6"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-accent">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-primary">Fully Insured Transit</p>
              <p className="text-xs text-muted-foreground">Coverage up to ₹10 Lakh</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 0.9, duration: 0.6 },
              x: { delay: 0.9, duration: 0.6 },
              y: { delay: 1.5, duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute top-6 right-4 hidden rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block md:-right-6"
          >
            <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              Live shipment
            </p>
            <p className="mt-1 text-sm font-bold text-primary">{'Delhi → Bengaluru'}</p>
            <div className="mt-2 h-1.5 w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: '10%' }}
                animate={{ width: '72%' }}
                transition={{ delay: 1.2, duration: 2, ease }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            { value: '15+', label: 'Years of experience' },
            { value: '25K+', label: 'Successful moves' },
            { value: '120+', label: 'Cities covered' },
            { value: '4.9/5', label: 'Average rating' },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-deep/80 px-6 py-6 backdrop-blur">
              <dt className="text-sm text-white/60">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

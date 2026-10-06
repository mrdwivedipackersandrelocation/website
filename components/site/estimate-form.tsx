'use client'

import { startTransition, useActionState, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Loader2,
  MapPin,
  Navigation,
  Phone,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react'
import { calculateEstimate, type EstimateState, type MoveSize } from '@/app/actions/estimate'
import { site, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { WhatsAppIcon } from '@/components/brand-icons'

const sizes: { value: MoveSize; label: string }[] = [
  { value: '1bhk', label: '1 BHK' },
  { value: '2bhk', label: '2 BHK' },
  { value: '3bhk', label: '3 BHK+' },
  { value: 'office', label: 'Office' },
]

const sizeLabel: Record<MoveSize, string> = {
  '1bhk': '1 BHK',
  '2bhk': '2 BHK',
  '3bhk': '3 BHK+',
  office: 'Office',
}

const initialState: EstimateState = { status: 'idle' }

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
const amount = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 })

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

type FieldProps = {
  id: string
  label: string
  icon: LucideIcon
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Field({ id, label, icon: Icon, error, className, ...props }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-primary">
        {label}
      </label>
      <div className="relative mt-2">
        <Icon
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id={id}
          name={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="h-14 w-full rounded-xl border border-input bg-secondary/40 pr-4 pl-12 text-base text-primary transition-all outline-none placeholder:text-muted-foreground/70 hover:border-primary/30 focus:border-accent focus:bg-card focus:ring-4 focus:ring-accent/20 aria-invalid:border-destructive aria-invalid:ring-destructive/15"
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function EstimateForm() {
  const [state, formAction, pending] = useActionState(calculateEstimate, initialState)
  const [size, setSize] = useState<MoveSize>('2bhk')
  const [formKey, setFormKey] = useState(0)
  const [showResult, setShowResult] = useState(true)

  const errors = state.status === 'error' ? state.fieldErrors : {}
  const result = state.status === 'success' && showResult ? state : null

  return (
    <section id="estimate" aria-labelledby="estimate-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-deep shadow-2xl shadow-primary/30">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_0%,oklch(0.36_0.1_262/0.9),transparent_70%)]"
          />
          <div aria-hidden="true" className="absolute -right-24 -bottom-24 size-96 rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-5 lg:gap-16 lg:p-16">
            <div className="text-white lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Free Estimate
              </span>
              <h2
                id="estimate-heading"
                className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl"
              >
                Get your moving cost in 30 seconds
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                No hidden charges, no obligations. Our move expert will call you back with a detailed, itemised
                quote.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {['Free on-site survey', 'Price-match guarantee', 'Pay after delivery options'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <CheckCircle2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={site.phoneHref}
                className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 pr-6 transition-colors hover:bg-white/10"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Prefer to talk? Call us</span>
                  <span className="block font-display text-lg font-semibold">{site.phone}</span>
                </span>
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="relative rounded-3xl bg-card p-6 shadow-2xl sm:p-8">
                <AnimatePresence mode="wait">
                  {result ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col"
                      role="status"
                    >
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-primary">
                        <CheckCircle2 className="size-7" aria-hidden="true" />
                      </span>
                      <p className="mt-6 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                        Estimated cost · {sizeLabel[result.size]} · {result.interCity ? 'Inter-city' : 'Local'}
                      </p>
                      <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                        <span className="font-sans">₹</span>
                        {amount.format(result.min)} <span className="text-muted-foreground/60">–</span>{' '}
                        <span className="font-sans">₹</span>
                        {amount.format(result.max)}
                      </p>
                      <dl className="mt-6 grid gap-3 rounded-2xl bg-secondary/60 p-5 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-muted-foreground">From</dt>
                          <dd className="font-semibold text-primary">{result.pickup}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">To</dt>
                          <dd className="font-semibold text-primary">{result.drop}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Moving date</dt>
                          <dd className="font-semibold text-primary">
                            {new Date(`${result.date}T00:00:00`).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Callback on</dt>
                          <dd className="font-semibold text-primary">+91 {result.phone}</dd>
                        </div>
                      </dl>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Final price depends on exact volume and floor access. Confirm on WhatsApp to lock in this rate.
                      </p>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={whatsappLink(
                            `Hi Mr. Dwivedi Packers, I'd like to confirm my move.\nSize: ${sizeLabel[result.size]}\nFrom: ${result.pickup}\nTo: ${result.drop}\nDate: ${result.date}\nPhone: +91 ${result.phone}\nEstimate: ${inr.format(result.min)} - ${inr.format(result.max)}`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          <WhatsAppIcon className="size-5" />
                          Confirm on WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setShowResult(false)
                            setFormKey((k) => k + 1)
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-4 font-semibold text-primary transition-colors hover:bg-secondary"
                        >
                          <RotateCcw className="size-4" aria-hidden="true" />
                          Recalculate
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key={`form-${formKey}`}
                      onSubmit={(event) => {
                        event.preventDefault()
                        const formData = new FormData(event.currentTarget)
                        setShowResult(true)
                        startTransition(() => formAction(formData))
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      noValidate
                      className="grid gap-5 sm:grid-cols-2"
                    >
                      <fieldset className="sm:col-span-2">
                        <legend className="text-sm font-semibold text-primary">What are you moving?</legend>
                        <input type="hidden" name="size" value={size} />
                        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup">
                          {sizes.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              role="radio"
                              aria-checked={size === option.value}
                              onClick={() => setSize(option.value)}
                              className={cn(
                                'h-12 rounded-xl border text-sm font-semibold transition-all',
                                size === option.value
                                  ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                                  : 'border-input bg-secondary/40 text-primary hover:border-primary/30',
                              )}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </fieldset>

                      <Field
                        id="pickup"
                        label="Pickup Location"
                        icon={MapPin}
                        placeholder="e.g. Sector 62, Noida"
                        autoComplete="address-level2"
                        maxLength={120}
                        required
                        error={errors.pickup}
                      />
                      <Field
                        id="drop"
                        label="Drop Location"
                        icon={Navigation}
                        placeholder="e.g. Whitefield, Bengaluru"
                        maxLength={120}
                        required
                        error={errors.drop}
                      />
                      <Field
                        id="date"
                        label="Moving Date"
                        icon={CalendarDays}
                        type="date"
                        min={todayISO()}
                        required
                        error={errors.date}
                      />
                      <Field
                        id="phone"
                        label="Phone Number"
                        icon={Phone}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="98765 43210"
                        maxLength={15}
                        required
                        error={errors.phone}
                      />

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={pending}
                          className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent text-base font-bold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/40 disabled:translate-y-0 disabled:opacity-70"
                        >
                          {pending ? (
                            <>
                              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                              Calculating...
                            </>
                          ) : (
                            <>
                              Calculate Estimate
                              <ArrowRight
                                className="size-5 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </button>
                        <p className="mt-3 text-center text-xs text-muted-foreground">
                          By submitting, you agree to receive a callback from our move expert. We never share your
                          number.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

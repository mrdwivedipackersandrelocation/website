import { Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Mr. Dwivedi Packers and Relocation — Home">
      <span className="relative flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[oklch(0.68_0.18_50)] shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:-rotate-6">
        <Truck className="size-5 text-primary" strokeWidth={2.25} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-bold tracking-tight',
            tone === 'dark' ? 'text-primary' : 'text-white',
          )}
        >
          Mr. Dwivedi
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-semibold tracking-[0.2em] uppercase',
            tone === 'dark' ? 'text-muted-foreground' : 'text-white/60',
          )}
        >
          Packers & Relocation
        </span>
      </span>
    </a>
  )
}

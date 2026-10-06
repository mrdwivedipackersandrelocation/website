'use client'

import { motion } from 'motion/react'
import { whatsappLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/brand-icons'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Hi Mr. Dwivedi Packers, I'd like a quote for my move.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 md:right-8 md:bottom-8"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 md:size-16">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7 md:size-8" />
      </span>
    </motion.a>
  )
}

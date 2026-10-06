import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { FacebookIcon, InstagramIcon, WhatsAppIcon, XBrandIcon, YouTubeIcon } from '@/components/brand-icons'
import { Logo } from './logo'

const services = ['Home Relocation', 'Office Shifting', 'Car Transportation', 'Bike Transportation', 'Warehousing']

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'X (Twitter)', href: 'https://x.com', icon: XBrandIcon },
  { label: 'YouTube', href: 'https://youtube.com', icon: YouTubeIcon },
  { label: 'WhatsApp', href: `https://wa.me/${site.whatsappNumber}`, icon: WhatsAppIcon },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-white/65">
              {"India's trusted packing and moving experts, delivering safe, on-time and stress-free relocations since 2010."}
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <social.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-widest text-accent uppercase">Quick Links</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#estimate" className="text-white/70 transition-colors hover:text-white">
                  Get a Quote
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-widest text-accent uppercase">Services</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 transition-colors hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-4">
            <h2 className="font-display text-sm font-semibold tracking-widest text-accent uppercase">Get in Touch</h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-white/75">{site.address}</span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <a href={site.phoneHref} className="text-white/75 transition-colors hover:text-white">
                    {site.phone}
                  </a>
                  <a href={site.altPhoneHref} className="text-white/75 transition-colors hover:text-white">
                    {site.altPhone}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <a href={`mailto:${site.email}`} className="self-center text-white/75 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed · GST Registered · IBA Approved</p>
        </div>
      </div>
    </footer>
  )
}

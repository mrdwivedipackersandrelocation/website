export const site = {
  name: 'Mr. Dwivedi Packers and Relocation',
  shortName: 'Mr. Dwivedi',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  altPhone: '+91 91234 56789',
  altPhoneHref: 'tel:+919123456789',
  whatsappNumber: '919876543210',
  email: 'info@mrdwivedipackers.com',
  address: 'Plot 42, Transport Nagar, Sector 18, Noida, Uttar Pradesh 201301',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { WhyChooseUs } from '@/components/site/why-choose-us'
import { HowItWorks } from '@/components/site/how-it-works'
import { Testimonials } from '@/components/site/testimonials'
import { EstimateForm } from '@/components/site/estimate-form'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <EstimateForm />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}

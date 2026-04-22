import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/01_Hero'
import Process from '@/components/sections/02_Process'
import WhyKlero from '@/components/sections/03_WhyKlero'
import Testimonials from '@/components/sections/04_Testimonials'
import Faq from '@/components/sections/05_Faq'
import FinalCta from '@/components/sections/06_FinalCta'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <WhyKlero />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

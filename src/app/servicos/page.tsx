import ContactSection from '@/components/ContactSection'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reboque from '@/components/Reboque'
import ServicesSection from '@/components/ServicesSection'

export default function Servicos() {
  return (
    <>
      <Header />
      <div className='flex justify-center py-10 text-black'>
        <h1 className='font-bold text-4xl'>SERVIÇOS</h1>
      </div>
      <ServicesSection />
      <Reboque />
      <ContactSection />
      <Footer />
    </>
  )
}

import Header from '@/components/Header'
import './globals.css'
import HomeIntro from '@/components/HomeIntro'
import AboutUs from '@/components/AboutUs'
import InfoHome from '@/components/InfoHome'
import ServicesHome from '@/components/ServicesHome'
import Clients from '@/components/Clients'
import Testimony from '@/components/Testimony'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import WeAreSection from '@/components/WeAreSection'

export default function Home() {
  return (
    <>
      <Header />
      <HomeIntro />
      <AboutUs />
      <ServicesHome />
      <WeAreSection />
      <InfoHome />
      <Clients />
      <Testimony />
      <ContactSection />
      <Footer />
    </>
  )
}

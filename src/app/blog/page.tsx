import ContactSection from '@/components/ContactSection'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import BlogContainer from '@/components/BlogContainer'

export default function Blog() {
  return (
    <>
      <Header />
      <BlogContainer />
      <ContactSection />
      <Footer />
    </>
  )
}

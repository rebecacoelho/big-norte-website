import ContactSection from '@/components/ContactSection'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import BlogContainer from '@/components/BlogContainer'

export default function Blog() {
  return (
    <>
      <Header />
      <div className='flex justify-center py-10 text-black'>
        <h1 className='font-bold text-4xl'>Blog</h1>
      </div>
      <BlogContainer />
      <ContactSection />
      <Footer />
    </>
  )
}

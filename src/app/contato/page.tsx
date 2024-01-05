import ContactSection from '@/components/ContactSection';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormTalkToUs from '@/components/FormTalkToUs';
import LocationComponent from '@/components/LocationComponent';

export default function Contato() {
  const mapCenter = { lat: -23.5505, lng: -46.6333 };

  return (
    <>
      <Header />
      <FormTalkToUs />
      <LocationComponent />
      <ContactSection />
      <Footer />
    </>
  );
}

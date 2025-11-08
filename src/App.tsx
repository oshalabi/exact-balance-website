import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Package } from './constants';



function App() {
  const [whatsappNumber, setWhatsappNumber] = useState('+31620492806');

  const packages: Package[] = [
    {
      name: 'BASIS PAKKET',
      price: 60,
      invoices: '20 tot 25 elk kwartaal',
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: 'Eenmalig €120 ex.btw',
        onlineBoekhoudpakket: true,
        contact: 'E-mail & WhatsApp',
        support: '30 Minuten per maand',
        jaarrekening: false,
        salarisadministratie: false
      }
    },
    {
      name: 'Standaard Pakket',
      price: 100,
      invoices: '50 tot 60 elk kwartaal',
      popular: true,
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: true,
        onlineBoekhoudpakket: true,
        contact: 'E-mail & WhatsApp',
        support: '60 Minuten per maand',
        jaarrekening: true,
        salarisadministratie: false
      }
    },
    {
      name: 'Pro Pakket',
      price: 150,
      invoices: 'Onbeperkt',
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: true,
        onlineBoekhoudpakket: true,
        contact: 'E-mail & WhatsApp',
        support: '120 Minuten per maand',
        jaarrekening: true,
        salarisadministratie: '€14 per Loonstrook'
      }
    }
  ];

  const handleWhatsAppClick = (packageName: string) => {
    const message = encodeURIComponent(`Hallo, ik ben geïnteresseerd in het ${packageName} pakket.`);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <Hero />
      <Services />
      <div id="pricing">
        <Pricing packages={packages} onWhatsAppClick={handleWhatsAppClick} />
      </div>
      <WhyChoose />
      <div id="contact">
        <Contact onWhatsAppClick={handleWhatsAppClick} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

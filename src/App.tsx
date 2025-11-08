import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LocalizationProvider, useLocalization } from './contexts/LocalizationContext';
import { Package } from './constants';

function AppContent() {
  const { t, language } = useLocalization();
  const whatsappNumber = '+31620492806';

  const packages: Package[] = [
    {
      name: t.pricing.packages.basis.name,
      price: 60,
      invoices: t.pricing.packages.basis.invoices,
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: t.pricing.features.inkomstenbelastingPrice,
        onlineBoekhoudpakket: true,
        contact: t.pricing.contactOptions.email,
        support: t.pricing.supportTime.thirty,
        jaarrekening: false,
        salarisadministratie: false
      }
    },
    {
      name: t.pricing.packages.standaard.name,
      price: 100,
      invoices: t.pricing.packages.standaard.invoices,
      popular: true,
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: true,
        onlineBoekhoudpakket: true,
        contact: t.pricing.contactOptions.email,
        support: t.pricing.supportTime.sixty,
        jaarrekening: true,
        salarisadministratie: false
      }
    },
    {
      name: t.pricing.packages.pro.name,
      price: 150,
      invoices: t.pricing.packages.pro.invoices,
      features: {
        verwerkingAdministratie: true,
        btwAangifte: true,
        inkomstenbelasting: true,
        onlineBoekhoudpakket: true,
        contact: t.pricing.contactOptions.emailPhone,
        support: t.pricing.supportTime.unlimited,
        jaarrekening: true,
        salarisadministratie: t.pricing.features.salarisadministratiePrice
      }
    }
  ];

  const handleWhatsAppClick = (packageName: string) => {
    const message = language === 'nl'
      ? `Hallo, ik ben geïnteresseerd in het ${packageName} pakket.`
      : `مرحبًا، أنا مهتم بباقة ${packageName}.`;
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
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

function App() {
  return (
    <LocalizationProvider>
      <AppContent />
    </LocalizationProvider>
  );
}

export default App;

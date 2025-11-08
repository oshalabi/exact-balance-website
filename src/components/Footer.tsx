import { useLocalization } from '../contexts/LocalizationContext';

function Footer() {
  const { t } = useLocalization();

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">{t.header.title}</h3>
            <p className="text-gray-400 text-sm">
              {t.footer.about.description}
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm mb-1">📞 {t.footer.contact.phone}</p>
                <a href="tel:+31620492806" className="text-gray-300 hover:text-yellow-400 transition-colors" dir="ltr">
                  +31 6 20492806
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">📧 {t.footer.contact.email}</p>
                <a href="mailto:info@exactbalance.nl" className="text-gray-300 hover:text-yellow-400 transition-colors" dir="ltr">
                  info@exactbalance.nl
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">💬 {t.footer.contact.whatsapp}</p>
                <a href="https://wa.me/31620492806" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors" dir="ltr">
                  +31 6 20492806
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.location.title}</h4>
            <p className="text-gray-300">{t.footer.location.address}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services.title}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {t.footer.services.items.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {getYear()} {t.header.title}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

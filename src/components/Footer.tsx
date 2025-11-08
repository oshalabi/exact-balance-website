
function Footer() {
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
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Exact Balance</h3>
            <p className="text-gray-400 text-sm">
              Arabisch Administratiekantoor in Nederland
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm mb-1">📞 Telefoon</p>
                <a href="tel:+31620492806" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  +31 6 20492806
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">📧 E-mail</p>
                <a href="mailto:info@exactbalance.nl" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  info@exactbalance.nl
                </a>
              </div>
            </div>
          </div>

          {/* Website & Location */}
          <div>
            <h4 className="text-white font-semibold mb-4">Locatie</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm mb-1">🌐 Website</p>
                <a href="https://www.exactbalance.nl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  www.exactbalance.nl
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">📍 Gevestigd in</p>
                <p className="text-gray-300">Arnhem</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Boekhouding</li>
              <li>Belastingaangifte</li>
              <li>Salarisadministratie</li>
              <li>Jaarrekeningen</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {getYear()} Exact Balance. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

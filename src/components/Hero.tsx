
function Hero() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-yellow-400/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-600/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 rounded-full px-4 py-2">
              <span className="text-yellow-400 text-sm font-semibold">Professioneel & Betrouwbaar</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Arabische Boekhouder &</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Belastingadviseur
              </span>
              <span className="block text-gray-200">in Nederland</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
              Bent u ondernemer in Nederland en zoekt u een betrouwbare Arabische boekhouder die uw taal spreekt én de Nederlandse wetgeving volledig kent?
            </p>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-yellow-600 pl-4">
              Bij Exact Balance ondersteunen wij zzp'ers, mkb-ondernemers en BV-eigenaren met professionele boekhouding en belastingadvies – zowel in het Nederlands als Arabisch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/50 hover:scale-105"
              >
                Gratis Adviesgesprek
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                Bekijk Pakketten
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-400 text-sm">Professioneel advies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 text-sm">Tweetalig service</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 text-sm">Gratis adviesgesprek</span>
              </div>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="hidden lg:flex justify-end items-center">
            <img
              src="/logo.png"
              alt="Exact Balance Logo"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

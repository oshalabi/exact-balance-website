import { useLocalization } from '../contexts/LocalizationContext';

function Hero() {
  const { t } = useLocalization();

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
              <span className="text-yellow-400 text-sm font-semibold">{t.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block pb-2">{t.hero.title}</span>
              <span className="block pt-2 pb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
              <span className="block pt-2 text-gray-200">{t.hero.titleSuffix}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#pricing"
                className="group bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/50 hover:scale-105"
              >
                {t.hero.ctaPrimary}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                {t.hero.ctaSecondary}
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
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

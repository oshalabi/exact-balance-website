import { useLocalization } from '../contexts/LocalizationContext';

function Services() {
  const { t } = useLocalization();

  return (
    <section className="bg-gray-800/30 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          {t.services.title}
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          {t.services.subtitle}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.services.items.map((service, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

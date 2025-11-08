
function WhyChoose() {
  const benefits = [
    {
      icon: "💬",
      title: "Twee talen – één visie",
      description: "Wij spreken zowel Arabisch als Nederlands, zodat u altijd begrijpt wat er in uw administratie gebeurt."
    },
    {
      icon: "🎯",
      title: "Ervaring met Arabische ondernemers",
      description: "Wij kennen de uitdagingen van nieuwkomers en zelfstandigen met buitenlandse achtergrond."
    },
    {
      icon: "🌐",
      title: "Online & persoonlijk",
      description: "Administratie kan volledig online, maar wij blijven dichtbij – met persoonlijk contact en begeleiding."
    },
    {
      icon: "💰",
      title: "Transparante prijzen",
      description: "Geen verrassingen, één duidelijk maandbedrag."
    },
    {
      icon: "📈",
      title: "Ondersteuning bij groei",
      description: "Van eenmanszaak naar BV – wij helpen u elke stap professioneel te zetten."
    },
    {
      icon: "🤝",
      title: "Persoonlijke aanpak",
      description: "Met duidelijke communicatie en diepgaande kennis van de Nederlandse fiscale regels zorgen wij dat uw administratie altijd correct, tijdig en overzichtelijk is."
    }
  ];

  return (
    <section className="bg-gray-800/30 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Waarom kiezen Arabische ondernemers voor Exact Balance?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ontdek waarom ondernemers met Arabische achtergrond vertrouwen op onze expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 border border-gray-700 hover:border-yellow-500/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

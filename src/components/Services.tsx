
function Services() {
  return (
    <section className="bg-gray-800/30 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Wij zijn gespecialiseerd in:
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Boekhouding & financiële administratie</h3>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">🧾</div>
            <h3 className="text-white font-semibold mb-2">Belastingaangifte (inkomstenbelasting & btw)</h3>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">👥</div>
            <h3 className="text-white font-semibold mb-2">Salarisadministratie voor bedrijven met personeel</h3>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">📑</div>
            <h3 className="text-white font-semibold mb-2">Jaarrekeningen & financiële rapportages</h3>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">🧮</div>
            <h3 className="text-white font-semibold mb-2">Advies over BV-structuur, aftrekposten & fiscale optimalisatie</h3>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-yellow-400 text-2xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-2">Gevestigd in Arnhem – wij werken door heel Nederland & online</h3>
          </div>
        </div>
        <p className="text-gray-300 text-center mt-8 max-w-3xl mx-auto">
          Onze missie is om het ondernemen makkelijker te maken voor Arabische ondernemers in Nederland,
          zodat u altijd voldoet aan de regels van de Belastingdienst en grip heeft op uw cijfers.
        </p>
      </div>
    </section>
  );
}

export default Services;

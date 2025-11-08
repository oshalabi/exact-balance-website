
import { Package } from '../constants';
import PackageCard from './PackageCard';



interface PricingProps {
  packages: Package[];
  onWhatsAppClick: (packageName: string) => void;
}

function Pricing({ packages, onWhatsAppClick }: PricingProps) {
  return (
    <section className="bg-gray-800/30 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Onze Pakketten
          </h2>
          <p className="text-gray-400 text-lg">
            Kies het pakket dat bij uw bedrijf past
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              pkg={pkg}
              onWhatsAppClick={onWhatsAppClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            * Alle prijzen zijn exclusief BTW. Werkzaamheden die niet binnen het pakket vallen, kunnen uiteraard worden toegevoegd tegen een kleine meerprijs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

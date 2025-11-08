import { Check, X, Phone, Mail } from 'lucide-react';
import { useLocalization } from '../contexts/LocalizationContext';

interface PackageFeatures {
  verwerkingAdministratie: boolean;
  btwAangifte: boolean;
  inkomstenbelasting: boolean | string;
  onlineBoekhoudpakket: boolean;
  contact: string;
  support: string;
  jaarrekening: boolean;
  salarisadministratie: string | false;
}

interface Package {
  name: string;
  price: number;
  invoices: string;
  popular?: boolean;
  features: PackageFeatures;
}

interface PackageCardProps {
  pkg: Package;
  onWhatsAppClick: (packageName: string) => void;
}

function PackageCard({ pkg, onWhatsAppClick }: PackageCardProps) {
  const { t } = useLocalization();
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col h-full ${pkg.popular
        ? 'bg-gradient-to-br from-yellow-600 to-yellow-500 shadow-2xl shadow-yellow-500/50'
        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
        }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gray-900 text-yellow-400 px-4 py-1 text-sm font-semibold rounded-bl-lg">
          {t.pricing.popular}
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        {/* Package Name */}
        <h3
          className={`text-3xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-yellow-400'
            }`}
        >
          {pkg.name}
        </h3>

        {/* Price */}
        <div className="mb-6">
          <span
            className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-white'
              }`}
          >
            €{pkg.price}
          </span>
          <span
            className={`text-lg ${pkg.popular ? 'text-white/80' : 'text-gray-400'
              }`}
          >
            /{t.pricing.perMonth}
          </span>
        </div>

        {/* Invoice Count */}
        <div
          className={`mb-6 pb-6 border-b ${pkg.popular ? 'border-white/20' : 'border-gray-700'
            }`}
        >
          <p
            className={`text-sm font-semibold mb-1 ${pkg.popular ? 'text-white/80' : 'text-gray-400'
              }`}
          >
            {t.pricing.invoiceCount}
          </p>
          <p
            className={`font-medium ${pkg.popular ? 'text-white' : 'text-yellow-400'
              }`}
          >
            {pkg.invoices}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {/* Verwerking volledige administratie */}
          <li className="flex items-start">
            {pkg.features.verwerkingAdministratie ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <span className={pkg.popular ? 'text-white text-sm' : 'text-gray-300 text-sm'}>
              {t.pricing.features.verwerkingAdministratie}
            </span>
          </li>

          {/* BTW-aangifte */}
          <li className="flex items-start">
            {pkg.features.btwAangifte ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <span className={pkg.popular ? 'text-white text-sm' : 'text-gray-300 text-sm'}>
              {t.pricing.features.btwAangifte}
            </span>
          </li>

          {/* Inkomstenbelasting */}
          <li className="flex items-start">
            {pkg.features.inkomstenbelasting ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <div className={pkg.popular ? 'text-white' : 'text-gray-300'}>
              <span className="text-sm">{t.pricing.features.inkomstenbelasting}</span>
              {typeof pkg.features.inkomstenbelasting === 'string' && (
                <p className="text-xs opacity-70 mt-0.5">({pkg.features.inkomstenbelasting})</p>
              )}
            </div>
          </li>

          {/* Online boekhoudpakket */}
          <li className="flex items-start">
            {pkg.features.onlineBoekhoudpakket ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <span className={pkg.popular ? 'text-white text-sm' : 'text-gray-300 text-sm'}>
              {t.pricing.features.onlineBoekhoudpakket}
            </span>
          </li>

          {/* Contact */}
          <li className="flex items-start">
            <Mail
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                }`}
            />
            <div className={pkg.popular ? 'text-white' : 'text-gray-300'}>
              <p className="font-semibold text-sm">{t.pricing.features.contact}</p>
              <p className="text-xs opacity-70">{pkg.features.contact}</p>
            </div>
          </li>

          {/* Ondersteuning */}
          <li className="flex items-start">
            <Phone
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                }`}
            />
            <div className={pkg.popular ? 'text-white' : 'text-gray-300'}>
              <p className="font-semibold text-sm">{t.pricing.features.support}</p>
              <p className="text-xs opacity-70">{pkg.features.support}</p>
            </div>
          </li>

          {/* Jaarrekening */}
          <li className="flex items-start">
            {pkg.features.jaarrekening ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <span className={pkg.popular ? 'text-white text-sm' : 'text-gray-300 text-sm'}>
              {t.pricing.features.jaarrekening}
            </span>
          </li>

          {/* Salarisadministratie */}
          <li className="flex items-start">
            {pkg.features.salarisadministratie ? (
              <Check
                className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-yellow-400'
                  }`}
              />
            ) : (
              <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-500" />
            )}
            <div className={pkg.popular ? 'text-white' : 'text-gray-300'}>
              <span className="font-semibold text-sm">{t.pricing.features.salarisadministratie}</span>
              {pkg.features.salarisadministratie && (
                <p className="text-xs opacity-70 mt-0.5">
                  {pkg.features.salarisadministratie}
                </p>
              )}
            </div>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <button
          onClick={() => onWhatsAppClick(pkg.name)}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
            ? 'bg-gray-900 text-yellow-400 hover:bg-gray-800'
            : 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-400'
            }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {t.pricing.choosePackage}
        </button>
      </div>
    </div>
  );
}

export default PackageCard;

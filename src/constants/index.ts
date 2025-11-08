export interface PackageFeatures {
  verwerkingAdministratie: boolean;
  btwAangifte: boolean;
  inkomstenbelasting: boolean | string;
  onlineBoekhoudpakket: boolean;
  contact: string;
  support: string;
  jaarrekening: boolean;
  salarisadministratie: string | false;
}

export interface Package {
  name: string;
  price: number;
  invoices: string;
  popular?: boolean;
  features: PackageFeatures;
}
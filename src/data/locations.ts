export type Location = {
  name: string;
  country: 'MX' | 'US';
  role: { en: string; es: string };
  flag: string;
};

export const locations: Location[] = [
  { name: 'Michoacán', country: 'MX', role: { en: 'Sourcing & Packing', es: 'Abasto y Empaque' }, flag: '🇲🇽' },
  { name: 'Veracruz', country: 'MX', role: { en: 'Lime Sourcing', es: 'Abasto de Limón' }, flag: '🇲🇽' },
  { name: 'Pharr, TX', country: 'US', role: { en: 'Central Hub', es: 'Centro Operativo' }, flag: '🇺🇸' },
  { name: 'Los Angeles', country: 'US', role: { en: 'West Coast Ops', es: 'Operaciones Costa Oeste' }, flag: '🇺🇸' },
];
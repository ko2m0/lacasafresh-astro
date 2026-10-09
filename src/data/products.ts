export type Product = {
  slug: string;
  name: { en: string; es: string };
  origin: { en: string; es: string };
  visual: 'avocado' | 'lime' | 'mango' | 'keylime' | 'guava' | 'nance' | 'papaya' | 'broccoli';
  gradient: string;
  featured: boolean;
  category?: string;
  // Future fields:
  // description?: { en: string; es: string };
  // seasonality?: string;
  // image?: string;
};

export const products: Product[] = [
  {
    slug: 'avocados',
    name: { en: 'Avocados', es: 'Aguacates' },
    origin: { en: 'Michoacán · Jalisco', es: 'Michoacán · Jalisco' },
    visual: 'avocado',
    gradient: 'linear-gradient(160deg, #2d4a18, #0a0a0a)',
    featured: true,
  },
  {
    slug: 'limes',
    name: { en: 'Limes', es: 'Limones' },
    origin: { en: 'Veracruz', es: 'Veracruz' },
    visual: 'lime',
    gradient: 'linear-gradient(160deg, #558b2f, #1b3a0a)',
    featured: true,
  },
  {
    slug: 'mango',
    name: { en: 'Mango', es: 'Mango' },
    origin: { en: 'Seasonal · Multiple regions', es: 'Temporal · Varias regiones' },
    visual: 'mango',
    gradient: 'linear-gradient(160deg, #e65100, #4a1500)',
    featured: true,
  },
  {
    slug: 'key-limes',
    name: { en: 'Key Limes', es: 'Limones Criollos' },
    origin: { en: 'Year-round', es: 'Todo el año' },
    visual: 'keylime',
    gradient: 'linear-gradient(160deg, #f9a825, #5d3a00)',
    featured: true,
  },
  {
    slug: 'guavas',
    name: { en: 'Guavas', es: 'Guayabas' },
    origin: { en: 'Michoacán', es: 'Michoacán' },
    visual: 'guava',
    gradient: 'linear-gradient(160deg, #6a1b9a, #1a0033)',
    featured: false,
  },
  {
    slug: 'nance',
    name: { en: 'Nance', es: 'Nance' },
    origin: { en: 'Michoacán', es: 'Michoacán' },
    visual: 'nance',
    gradient: 'linear-gradient(160deg, #33691e, #0a1a00)',
    featured: false,
  },
  {
    slug: 'papaya',
    name: { en: 'Papaya', es: 'Papaya' },
    origin: { en: 'Year-round', es: 'Todo el año' },
    visual: 'papaya',
    gradient: 'linear-gradient(160deg, #d84315, #3e0f00)',
    featured: false,
  },
  {
    slug: 'broccoli',
    name: { en: 'Broccoli', es: 'Brócoli' },
    origin: { en: 'Multiple regions', es: 'Varias regiones' },
    visual: 'broccoli',
    gradient: 'linear-gradient(160deg, #00695c, #001a14)',
    featured: false,
  },
];
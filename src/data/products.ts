export type Product = {
  slug: string;
  name: { en: string; es: string };
  origin: { en: string; es: string };
  visual: 'avocado' | 'lime' | 'mango' | 'keylime' | 'guava' | 'nance' | 'papaya' | 'broccoli';
  gradient: string;
  featured: boolean;
  published: boolean;
  category?: string;
  description?: { en: string; es: string };
  seasonality?: { en: string; es: string };
  image?: string;
};

export const products: Product[] = [
  {
    slug: 'avocados',
    name: { en: 'Avocados', es: 'Aguacates' },
    origin: { en: 'Michoacán · Jalisco', es: 'Michoacán · Jalisco' },
    visual: 'avocado',
    gradient: 'linear-gradient(160deg, #2d4a18, #0a0a0a)',
    featured: true,
    published: true, 
    description: { 
      en: 'Premium Hass avocados, rich in oil and flavor, sourced directly from Michoacán.', 
      es: 'Aguacates Hass premium, ricos en aceite y sabor, abastecidos directamente desde Michoacán.' 
    },
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    image: '/images/products/avocados.jfif',
  },
  {
    slug: 'limes',
    name: { en: 'Limes', es: 'Limones' },
    origin: { en: 'Veracruz', es: 'Veracruz' },
    visual: 'lime',
    gradient: 'linear-gradient(160deg, #558b2f, #1b3a0a)',
    featured: true,
    published: true, 
    description: { 
      en: 'Vibrant, thin-skinned Persian limes with high juice content and a bright, zesty flavor. Sourced from Veracruz for year-round commercial availability.', 
      es: 'Limones Persa vibrantes, de cáscara delgada y alto contenido de jugo, con un sabor brillante y cítrico. Abastecidos desde Veracruz para disponibilidad comercial todo el año.' 
    },
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    image: '/images/products/limes.jfif',
  },
    {
    slug: 'key-limes',
    name: { en: 'Key Limes', es: 'Limones Criollos' },
    origin: { en: 'Year-round', es: 'Todo el año' },
    visual: 'keylime',
    gradient: 'linear-gradient(160deg, #f9a825, #5d3a00)',
    featured: true,
    published: true, 
    description: { 
      en: 'Small, intensely aromatic Key limes with a distinct floral acidity. A premium specialty citrus highly sought after by foodservice and mixology markets.', 
      es: 'Limones criollos pequeños, intensamente aromáticos y con una acidez floral distintiva. Un cítrico premium de especialidad, altamente buscado por los mercados de foodservice y mixología.' 
    },
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    image: '/images/products/keylimes.jfif',
  },
  {
    slug: 'guavas',
    name: { en: 'Guavas', es: 'Guayabas' },
    origin: { en: 'Michoacán', es: 'Michoacán' },
    visual: 'guava',
    gradient: 'linear-gradient(160deg, #6a1b9a, #1a0033)',
    featured: true,
    published: true, 
    description: { 
      en: 'Fragrant, tropical guavas with sweet pink flesh and a rich aroma. Carefully selected from Michoacán orchards for optimal ripeness and export quality.', 
      es: 'Guayabas tropicales y fragantes, de pulpa rosa dulce y aroma intenso. Seleccionadas cuidadosamente de huertos en Michoacán para garantizar su madurez óptima y calidad de exportación.' 
    },
    seasonality: { en: 'Seasonal', es: 'De temporada' },
    image: '/images/products/guavas.jfif',
  },
  {
    slug: 'nance',
    name: { en: 'Nance', es: 'Nance' },
    origin: { en: 'Michoacán', es: 'Michoacán' },
    visual: 'nance',
    gradient: 'linear-gradient(160deg, #33691e, #0a1a00)',
    featured: true,
    published: true, 
    description: { 
      en: 'A rare, highly aromatic tropical fruit with a unique sweet-tart flavor profile. Sourced from select Michoacán regions, perfect for specialty retail and culinary applications.', 
      es: 'Una fruta tropical rara y altamente aromática, con un perfil de sabor único entre dulce y ácido. Abastecida desde regiones selectas de Michoacán, ideal para retail de especialidad y aplicaciones culinarias.' 
    },
    seasonality: { en: 'Seasonal', es: 'De temporada' },
    image: '/images/products/nances.jfif',
  },
  {
    slug: 'mango',
    name: { en: 'Mango', es: 'Mango' },
    origin: { en: 'Seasonal · Multiple regions', es: 'Temporal · Varias regiones' },
    visual: 'mango',
    gradient: 'linear-gradient(160deg, #e65100, #4a1500)',
    featured: false,
    published: false, 
  },
  {
    slug: 'papaya',
    name: { en: 'Papaya', es: 'Papaya' },
    origin: { en: 'Year-round', es: 'Todo el año' },
    visual: 'papaya',
    gradient: 'linear-gradient(160deg, #d84315, #3e0f00)',
    featured: false,
    published: false, 
  },
  {
    slug: 'broccoli',
    name: { en: 'Broccoli', es: 'Brócoli' },
    origin: { en: 'Multiple regions', es: 'Varias regiones' },
    visual: 'broccoli',
    gradient: 'linear-gradient(160deg, #00695c, #001a14)',
    featured: false,
    published: false, 
  },
];
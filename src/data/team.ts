export type TeamMember = {
  slug: string;
  name: string;
  role: { en: string; es: string };
  bio: { en: string; es: string };
  email: string;
  phone?: string;
  whatsapp?: string;
  linkedin?: string;
  photo?: string;
  featured?: boolean;
  order: number;
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'arturo',
    name: 'Arturo Larios',
    role: {
      en: 'CEO & Founder',
      es: 'CEO y Fundador',
    },
    bio: {
      en: 'Founder of La Casa Fresh.',
      es: 'Fundador de La Casa Fresh.',
    },
    email: 'Artur@lacasafresh.com',
    phone: '+1 (925) 558-5243',
    whatsapp: '+19255585243',
    linkedin: 'https://www.linkedin.com/in/arturo-larios-7259b61b0/',
    photo: '/img/team/arturo.png',  
    featured: true,
    order: 1,
  },
   {
    slug: 'sales-1',
    name: 'Paulette Sandoval',
    role: {
      en: 'Sales Director',
      es: 'Director de Ventas',
    },
    bio: {
      en: 'Leading our commercial relationships across the United States.',
      es: 'Liderando nuestras relaciones comerciales en Estados Unidos.',
    },
    email: 'sales@lacasafresh.com',
    phone: '+1 (805) 796-1694',
    whatsapp: '+18057961694',
    photo: '/img/team/paulette.png',  
    linkedin: '',
    order: 2,
  },
   {
    slug: 'sales-2',
    name: 'Jorge Manzo',
    role: {
      en: 'Sourcing',
      es: 'Ejecutivo de Cuentas',
    },
    bio: {
      en: 'Connecting buyers with the right product at the right time.',
      es: 'Conectando compradores con el producto correcto en el momento correcto.',
    },
    email: 'jorge@lacasafresh.com',
    phone: '+52 (452) 128-7338',
    whatsapp: '+524521287338',
    linkedin: '',
    photo: '/img/team/jorge.png',  
    order: 3,
  },
   {
    slug: 'sales-3',
    name: 'Mayte Ozuna',
    role: {
      en: 'Grower Relations',
      es: 'Relaciones con Productores',
    },
    bio: {
      en: 'The link between our Mexican grower network and commercial operations.',
      es: 'El enlace entre nuestra red de productores mexicanos y operaciones comerciales.',
    },
    email: 'mayte@lacasafresh.com',
    phone: '+52 (443) 732-6011',
    whatsapp: '+524437326011',
    linkedin: '',
    order: 4,
  },
   {
    slug: 'sales-3',
    name: 'Guillermo Trejo',
    role: {
      en: 'Grower Relations',
      es: 'Relaciones con Productores',
    },
    bio: {
      en: 'The link between our Mexican grower network and commercial operations.',
      es: 'El enlace entre nuestra red de productores mexicanos y operaciones comerciales.',
    },
    email: 'guillermo@lacasafresh.com',
    phone: '+52 (443) 492-0041',
    whatsapp: '+19560000000',
    linkedin: '',
    order: 4,
  },
  // ... other team members
];
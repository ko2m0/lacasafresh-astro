export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
  dataCta?: string;
};

export const navigation = {
  en: [
    { label: 'Products', href: '/en/products/' },
    { label: 'Network', href: '/en/#network' },
    { label: 'About', href: '/en/about/' },
    { label: 'Contact', href: '/en/contact/' },
    {
      label: "Let's Talk",
      href: '/en/contact/',
      cta: true,
      dataCta: 'contact',
    },
  ] as NavItem[],
  es: [
    { label: 'Productos', href: '/es/products/' },
    { label: 'Red', href: '/es/#network' },
    { label: 'Nosotros', href: '/es/about/' },
    { label: 'Contacto', href: '/es/contact/' },
    {
      label: 'Hablemos',
      href: '/es/contact/',
      cta: true,
      dataCta: 'contact',
    },
  ] as NavItem[],
};
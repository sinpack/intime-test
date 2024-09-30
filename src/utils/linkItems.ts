import { base } from '$app/paths';

const linkItems = [
  { name: 'Αρχική', href: base },
  { name: 'Πλεονεκτήματα', href: `${base}/why-choose-us` },
  {
    name: 'FAQ',
    href: '/faq',
  },

  { name: 'Τιμοκατάλογος', href: `${base}/pricing` },
  { name: 'Πελατολόγιο', href: `${base}/#clients` },
  { name: 'Επικοινωνία', href: `${base}/contact` },
];

export default linkItems;

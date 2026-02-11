//import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      {text: 'Home', href: '/'},
      {text: 'Team', href: '/team'},
      {text: 'Careers', href: '/careers'},
      {text: 'Press', href: '/press'},
  ],
  actions: [
    {
	variant: 'primary',
	text: 'Contact us',
	href: '/contact',
	target: '_self',
	icon: 'tabler:mail',
    }
  ]
};

export const footerData = {
  links: [
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/wattloop/' },
  ],
  footNote: `
    <span class="block text-sm text-muted">Wattloop BV</span>
    <span class="block text-sm text-muted">Wiedauwkaai 51, 9000 Ghent, Belgium</span>
    <span class="block text-sm text-muted">VAT: BE 1028.171.492</span>
  `,
};

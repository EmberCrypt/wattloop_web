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
  footNote: ``,
};

import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'My Profile',
    icon: 'nb-compose',
    link: '/pages/forms/layouts',
  },
  {
    title: 'Consultants',
    icon: 'nb-gear',
    link: '/pages/forms/inputs',
  },
  {
    title: 'Projects',
    icon: 'nb-bar-chart',
    link: '/pages/charts/chartjs',
  },
  {
    title: 'History',
    icon: 'nb-tables',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Sign Out',
    icon: 'nb-locked',
    link: '/auth/login',
  },
];

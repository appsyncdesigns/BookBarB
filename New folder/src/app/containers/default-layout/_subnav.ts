/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Ultimate Salon Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { INavData } from '@coreui/angular';

export const subNavItems: INavData[] =[
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Salons',
    url: '/salons',
    iconComponent: { name: 'cil-bank' },
    children: [
      {
        name: 'Salons',
        url: '/salons',
        iconComponent: { name: 'cil-bank' }
      },
      {
        name: 'Appointments',
        url: '/appointments',
        iconComponent: { name: 'cil-calendar' },
      },
      {
        name: 'Joining Request',
        url: '/salon-request',
        iconComponent: { name: 'cil-face' }
      },
      {
        name: 'Salon Stats',
        url: '/salon-stats',
        iconComponent: { name: 'cil-chart-line' }
      }
    ]
  },
];

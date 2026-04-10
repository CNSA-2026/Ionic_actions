import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabClients',
        loadComponent: () =>
          import('./tabClients/tabClients.page').then((m) => m.TabClientsPage),
      },
      {
        path: 'tabReservations',
        loadComponent: () =>
          import('./tabReservations/tabReservations.page').then(
            (m) => m.TabReservationsPage,
          ),
      },
      {
        path: 'tabProducts',
        loadComponent: () =>
          import('./tabProducts/tabProducts.page').then(
            (m) => m.TabProductsPage,
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tabReservations',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabReservations',
    pathMatch: 'full',
  },
];

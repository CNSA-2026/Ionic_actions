import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail-client/:id',
    loadComponent: () => import('./features/detail-client/detail-client.page').then( m => m.DetailClientPage)
  },
  {
    path: 'create-reservation',
    loadComponent: () => import('./features/create-reservation/create-reservation.page').then( m => m.CreateReservationPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then( m => m.LoginPage)
  },

];

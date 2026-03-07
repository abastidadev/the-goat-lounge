import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'THE GOAT LOUNGE',
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
    title: 'Menu - THE GOAT LOUNGE',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact - THE GOAT LOUNGE',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: '404 - THE GOAT LOUNGE',
  },
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'home',
    loadComponent: () => import('../core/views/home/home.component'),
  },
  {
    path: 'detail/:number',
    title: 'detail',
    loadComponent: () => import('../core/views/detail/detail.component'),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

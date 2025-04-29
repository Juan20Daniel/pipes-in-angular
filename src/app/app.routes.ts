import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'basic',
    title:'Pipe básicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path:'custom',
    title:'Pipe personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path:'numeric',
    title:'Pipe numericos',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component')
  },
  {
    path:'uncommon',
    title:'Pipe no tan comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path:'**',
    redirectTo:'/basic'
  }
];

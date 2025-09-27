import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent), },
  { path: 'main', loadComponent: () => import('./pages/main/main.component').then((c) => c.MainComponent), },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];

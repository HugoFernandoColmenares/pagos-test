import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent), },
  { path: 'main', loadComponent: () => import('./pages/main/main.component').then((c) => c.MainComponent), canActivate: [authGuard], },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];

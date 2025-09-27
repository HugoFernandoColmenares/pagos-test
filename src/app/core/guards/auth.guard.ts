import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const session = authService.getSession();

  if (session) {
    return true; // Sesión válida → permitir acceso
  }

  // No hay sesión → redirigir a login
  router.navigate(['/login']);
  return false;
};

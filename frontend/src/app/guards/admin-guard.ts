import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core/primitives/di';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (!authService.isAdmin()) {
    console.log('Accès refusé - Admins seulement');
    return false;
  }
  else {
    return true;
  }
};

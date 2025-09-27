import { Injectable, signal } from '@angular/core';
import { SessionData } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionSignal = signal<SessionData | null>(this.getSession());

  public login(email: string, password: string, role: 'admin' | 'mod' | 'user'): void {
    const permissions = this.getPermissionsByRole(role);
    const session: SessionData = { email, password, role, permissions };
    localStorage.setItem('user', JSON.stringify(session));
    this.sessionSignal.set(session);
  }

  // Para "Remember me"
  public saveSession(user: Pick<SessionData, 'email' | 'password'>): void {
    const current = this.getSession();
    const session: SessionData = {
      ...current,
      ...user,
      role: current?.role ?? 'user',
      permissions: current?.permissions ?? { canRead: true, canCreate: false, canEdit: false, canDelete: false }
    };
    localStorage.setItem('user', JSON.stringify(session));
    this.sessionSignal.set(session);
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.sessionSignal.set(null);
  }

  public getSession(): SessionData | null {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) as SessionData : null;
  }

  public getSessionSignal() {
    return this.sessionSignal.asReadonly();
  }

  private getPermissionsByRole(role: 'admin' | 'mod' | 'user') {
    switch (role) {
      case 'admin':
        return { canRead: true, canCreate: true, canEdit: true, canDelete: true };
      case 'mod':
        return { canRead: true, canCreate: true, canEdit: true, canDelete: false };
      case 'user':
        return { canRead: true, canCreate: false, canEdit: false, canDelete: false };
      default:
        return { canRead: false, canCreate: false, canEdit: false, canDelete: false };
    }
  }
}

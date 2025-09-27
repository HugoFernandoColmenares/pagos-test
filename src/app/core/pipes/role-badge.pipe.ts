import { Pipe, PipeTransform } from '@angular/core';

type BadgeSeverity = "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | null | undefined;

@Pipe({
  name: 'roleBadge'
})
export class RoleBadgePipe implements PipeTransform {
  transform(role: 'admin' | 'mod' | 'user' | null | undefined): { label: string; severity: BadgeSeverity } {
    switch (role) {
      case 'admin':
        return { label: 'Administrador', severity: 'success' };
      case 'mod':
        return { label: 'Moderador', severity: 'info' };
      case 'user':
        return { label: 'Usuario', severity: 'warn' };
      default:
        return { label: 'Desconocido', severity: 'secondary' };
    }
  }
}

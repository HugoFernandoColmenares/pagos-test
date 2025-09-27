import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { SessionData } from '../../core/interfaces/auth.interface';
import { BadgeModule } from 'primeng/badge';
import { Router } from '@angular/router';
import { AlertService } from '../../core/services/alert.service';
import { RoleBadgePipe } from '../../core/pipes/role-badge.pipe';

type BadgeSeverity = "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | null | undefined;

@Component({
  selector: 'shared-header',
  imports: [BadgeModule, RoleBadgePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private alertService = inject(AlertService);


  protected currentUser: SessionData | null = null;

  ngOnInit(): void {
    this.currentUser = this.authService.getSession();
  }

  protected onCloseSesson():void {
    this.alertService
      .optionsAlert('¿Está seguro que desea cerrar la sesión actual?')
      .then((result) => {
        if (result.isConfirmed) {
          this.authService.logout();
          this.router.navigateByUrl('/');
          this.alertService.successAlert('Se ha cerrado la sesión correctamente..');
        }
      })
      .catch(() => {
        this.alertService.errorAlert();
      });
  }

  protected returnSeverity(term: any): BadgeSeverity {
    return term;
  }
}

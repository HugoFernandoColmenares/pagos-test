import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

// Prime Ng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AuthService } from '../../core/services/auth.service';
import { loginRequestDto } from '../../core/interfaces/auth.interface';

@Component({
  selector: 'auth-login',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  // Angular
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Custom
  private authService = inject(AuthService);

  // Variables
  protected passwordIcon: 'pi pi-eye' | 'pi pi-eye-slash' = 'pi pi-eye-slash';
  protected passwordType: 'text' | 'password' = 'password';
  protected togglePasswordIcon: boolean = false;
  protected isRememberActive: boolean = false;

  // Se verifica si existen datos de usuario al inicio del componente
  ngOnInit(): void {
    const currentSesson = this.authService.getSession();
    if(currentSesson) {
      this.isRememberActive = true;
      this.loginForm.controls["email"].setValue(currentSesson.email);
      this.loginForm.controls["password"].setValue(currentSesson.password);
    }
  }

  protected loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // Método al enviar el formulario
  protected onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.router.navigateByUrl('/main');
    console.log('Login data:', { email, password });
  }

  // Cambiar icono
  protected toggleIcon(): void {
    this.togglePasswordIcon = !this.togglePasswordIcon;
    if (this.togglePasswordIcon) {
      this.passwordIcon = 'pi pi-eye';
      this.passwordType = 'text';
    } else {
      this.passwordIcon = 'pi pi-eye-slash';
      this.passwordType = 'password';
    }
  }

  // Recordar Usuario
  protected rememberUser(): void {
    this.isRememberActive = !this.isRememberActive;
    const user: loginRequestDto = this.loginForm.value;
    if(this.isRememberActive && !this.loginForm.invalid) {
      this.authService.saveSession(user);
    }
  }
}

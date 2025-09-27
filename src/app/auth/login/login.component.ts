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
import { UserType } from '../../core/interfaces/auth.interface';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'auth-login',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  protected passwordIcon: 'pi pi-eye' | 'pi pi-eye-slash' = 'pi pi-eye-slash';
  protected passwordType: 'text' | 'password' = 'password';
  protected togglePasswordIcon: boolean = false;
  protected isRememberActive: boolean = false;
  protected selectedUser: UserType | null = null;

  protected userTypes: UserType[] = [
    {
      name: 'Administrator',
      email: 'admin@correo.com',
      password: 'SuperSecurePassword@123',
      authLevel: 'admin',
    },
    {
      name: 'Moderator',
      email: 'mod@correo.com',
      password: 'DynamicPassword_123',
      authLevel: 'mod',
    },
    {
      name: 'User',
      email: 'user@correo.com',
      password: 'password.123',
      authLevel: 'user',
    },
  ];

  protected loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    const currentSesson = this.authService.getSession();
    if (currentSesson) {
      this.isRememberActive = true;
      this.loginForm.controls['email'].setValue(currentSesson.email);
      this.loginForm.controls['password'].setValue(currentSesson.password);
    }
  }

  protected onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    const foundUser = this.userTypes.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      console.error('Credenciales inválidas');
      return;
    }
    this.authService.login(email, password, foundUser.authLevel);
    this.router.navigateByUrl('/main');
  }

  protected toggleIcon(): void {
    this.togglePasswordIcon = !this.togglePasswordIcon;
    this.passwordIcon = this.togglePasswordIcon
      ? 'pi pi-eye'
      : 'pi pi-eye-slash';
    this.passwordType = this.togglePasswordIcon ? 'text' : 'password';
  }

  protected rememberUser(): void {
    this.isRememberActive = !this.isRememberActive;
    if (this.isRememberActive && !this.loginForm.invalid) {
      this.authService.saveSession(this.loginForm.value);
    }
  }

  protected onSelectUser(event: any): void {
  const email = event.value;
  const temp = this.userTypes.find((u) => u.email === email);
  this.selectedUser = temp ?? null;

  if (this.selectedUser) {
    // Rellenar automáticamente la contraseña en el form
    this.loginForm.patchValue({
      password: this.selectedUser.password
    });
  } else {
    this.loginForm.patchValue({ password: '' });
  }
}

}

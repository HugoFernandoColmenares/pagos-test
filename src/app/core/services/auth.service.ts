import { Injectable, signal } from '@angular/core';
import { loginRequestDto } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public saveSession(user: loginRequestDto): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getSession(): loginRequestDto | null {
    let valueStoraged: string = localStorage.getItem('user') ?? '';
    if(valueStoraged.length > 0) {
      return JSON.parse(valueStoraged);
    } else {
      return null;
    }
  }
}

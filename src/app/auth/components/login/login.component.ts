import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errors: string | null = null;

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {}

  onSubmit(): void {
    const loginRequest: LoginRequestInterface = {
      email: this.form.value.email!,
      password: this.form.value.password!
    };
    
    this.authService.login(loginRequest).subscribe({
      next: (currentUser) => {
        this.authService.setToken(currentUser);
        this.authService.setCurrentUser(currentUser);
      },
      error: (err: HttpErrorResponse) => {
        this.errors = err.error.join(', ');
      }
    })
  }
}

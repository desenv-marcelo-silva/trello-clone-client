import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterRequestInterface } from '../../types/register-request.interface';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  errors: string | null = null;

  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {}

  onSubmit(): void {
    const registerRequest: RegisterRequestInterface = {
      email: this.form.value.email!,
      username: this.form.value.username!,
      password: this.form.value.password!
    };
    
    this.authService.register(registerRequest).subscribe({
      next: (currentUser) => {
        console.log('currentUser', currentUser);
        this.authService.setToken(currentUser);
        this.authService.setCurrentUser(currentUser);
      },
      error: (err: HttpErrorResponse) => {
        console.error('err', err.error);
        this.errors = err.error.join(', ');
      }
    })
  }
}

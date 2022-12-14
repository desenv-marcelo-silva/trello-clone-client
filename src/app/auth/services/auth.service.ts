import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, filter, map, Observable } from 'rxjs';

import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface';
import { CurrentUserInterface } from 'src/app/auth/types/current-user.interface';
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined);
  

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`;
    return this.http.get<CurrentUserInterface>(url);
  }

  register(registerRequest: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.http.post<CurrentUserInterface>(url, registerRequest);
  }

  login(loginRequest: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`;
    return this.http.post<CurrentUserInterface>(url, loginRequest);
  }

  setCurrentUser(currentUser: CurrentUserInterface | null): void {
    this.currentUser$.next(currentUser);
  }

  setToken(currentUser: CurrentUserInterface): void {
    localStorage.setItem('token', currentUser.token);
  }
}

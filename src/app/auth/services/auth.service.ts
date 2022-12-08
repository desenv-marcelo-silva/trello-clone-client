import { RegisterRequestInterface } from './../types/register-request.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, Observable } from 'rxjs';

import { CurrentUserInterface } from '../types/current-user.interface';
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

  setCurrentUser(currentUser: CurrentUserInterface | null): void {
    this.currentUser$.next(currentUser);
  }

  setToken(currentUser: CurrentUserInterface): void {
    localStorage.setItem('token', currentUser.token);
  }
}

import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../shared/appconfig';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient,private router:Router,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  register(user) {
    return this.http.post<any>(this.apiconfig.apiEndPoint + '/register', user);
  }

  login(user) {
    return this.http.post<any>(this.apiconfig.apiEndPoint + '/login', user);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}

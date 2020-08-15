import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { APP_CONFIG, IAppConfig } from '../shared/appconfig';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private apiconfig: IAppConfig
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiconfig.apiEndPoint);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiconfig.apiEndPoint +'/' + id);
  }

  addUser(user: User): Observable<HttpResponse<any>> {
    return (
      this.http.post<HttpResponse<any>>(
        this.apiconfig.apiEndPoint + '/',
        JSON.stringify(user),
        { headers: this.headers, observe: 'response' }
      )
    );
  }

  updateUser(user: User): Observable<HttpResponse<any>> {
    return this.http.put(
      this.apiconfig.apiEndPoint + '/' + user._id,
      JSON.stringify(user),
      { headers: this.headers, observe: 'response' }
    );
  }

  deleteUser(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(
      this.apiconfig.apiEndPoint + '/' + id,
      { observe: 'response' }
    );
  }
}

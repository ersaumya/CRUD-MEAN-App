import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { APP_CONFIG, IAppConfig } from '../shared/appconfig';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient ,@Inject(APP_CONFIG) private apiconfig:IAppConfig) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiconfig.apiEndPoint+'/user');
  }

  getUser(id:string): Observable<User[]> {
    return this.http.get<User[]>(this.apiconfig.apiEndPoint+'/user/'+id);
  }
}

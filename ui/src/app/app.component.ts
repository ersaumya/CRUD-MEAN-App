import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  
  constructor(private auth:AuthService){

  }

  check():boolean{
    return this.auth.isLoggedIn();
  }
  logout(){
    this.auth.logoutUser();
  }
}

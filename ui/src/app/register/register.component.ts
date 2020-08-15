import { Router } from '@angular/router';
import { User } from './../model/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userData: {};
  form: FormGroup;
  constructor(private auth: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      contact:new FormControl('')

    })
  }

  registerUser() {
    this.auth.register(this.form.value).subscribe(
      res =>{
          console.log(res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/list']);
      } ,
      (err) => console.log(err)
    );
  }
}

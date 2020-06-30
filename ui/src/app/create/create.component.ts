import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,private router:Router) {
    this.user=new User();
  }

  ngOnInit(): void {}

  saveData(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.user).subscribe(
        res=>{
          if(res.status===201){
            this.router.navigate(['/']);
          }
        });
    }
  }
}

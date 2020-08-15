import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService,private router:Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (res) => {this.users = res;},
      (err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.router.navigate(['/login'])
          }
        }
      });
  }

  deleteUser(id){
    if(confirm('Are you sure to delete ?')){
      this.userService.deleteUser(id).subscribe(res=>{
        if(res.status===200){
          for(let i=0;i<this.users.length;i++){
            if(id===this.users[i]._id){
              this.users.splice(i,1);
              break;
            }
          }
        }
      })
    }
  }
}

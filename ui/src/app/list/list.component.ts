import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
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

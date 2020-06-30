import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res=>{
      this.users=res;
    })
  }

}

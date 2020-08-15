import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params.id;
      if (id !== undefined) {
        this.userService.getUser(id).subscribe((res) => {
          this.user = res;
        });
      }
    });
  }

  saveData(form: NgForm) {
    if (form.valid) {
      if (this.user._id !== undefined) {
        this.userService.updateUser(this.user).subscribe((res) => {
          if (res.status === 200) {
            this.router.navigate(['/list']);
          }
        });
      } else {
        this.userService.addUser(this.user).subscribe((res) => {
          if (res.status === 201) {
            this.router.navigate(['/']);
          }
        });
      }
    }
  }
}

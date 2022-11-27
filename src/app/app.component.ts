import { Component } from '@angular/core';
import {IUser, UserRole, UserStatus} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angLesson7.1';
  users: IUser[]=[
    {
      fullName:"shjalala",
      role:'user',
      status:'active'
    }
  ];
  addUser(user: IUser) {
    this.users.push(user)
    console.log("new User Created: ", user)
  }

  changeStatusParent(status: UserStatus, ind: number) {
    console.log("user status changed from app: ", status, ind)
    this.users[ind].status = status;
  }

  changeRoleParent(role: UserRole, ind:number) {
    console.log("user status changed from app: ", role, ind)
    this.users[ind].role = role;

  }
}

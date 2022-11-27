import { Injectable } from '@angular/core';
import {IUser, UserRole, UserStatus} from "../interfaces";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[]=[
    // {
    //   fullName:"shjalala",
    //   role:'user',
    //   status:'active'
    // }
  ];
  constructor(private logService: LogService) {
  }
  init(user: IUser){
    console.log(user.fullName)
  }
  addUser(user: IUser) {
    this.users.push(user)
    this.logService.log(`new User Created: ${user} `)
  }

  changeStatus(status: UserStatus, ind: number) {
    this.users[ind] = {...this.users[ind], status};
    this.logService.log(`user status changed from app:${status}, index: ${ind} `)
  }

  changeRole(role: UserRole, ind:number) {
    console.log("user status changed from app: ", role, ind)
    this.users[ind] = {...this.users[ind], role};
    this.logService.log(`user status changed from app:   ${role}, index: ${ind} `)

  }
}

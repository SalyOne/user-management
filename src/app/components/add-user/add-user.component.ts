import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser, UserRole} from "../../interfaces";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() addUser:EventEmitter<IUser> = new EventEmitter<IUser>();

  addUserHandler(fullName: string, role: string) {

    this.addUser.emit({
      fullName:fullName,
      role: role as UserRole,
      status: 'inactive'
    })
    console.log("new user created: ",  fullName, role)
  }
}

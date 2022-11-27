import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser, UserRole} from "../../../../interfaces";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  // @Output() addUserme:EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor( private userService: UserService) {
  }
  addUserHandlerMe(fullName: string, role: string) {
    if (!fullName || !role) return;

    this.userService.addUser({
      fullName:fullName,
      role: role as UserRole,
      status: 'inactive'
  })
  }
}

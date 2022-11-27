import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser, UserRole} from "../../interfaces";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() addUserme:EventEmitter<IUser> = new EventEmitter<IUser>();

  addUserHandlerMe(fullName: string, role: string) {
    if (!fullName || !role) return;

    this.addUserme.emit({
      fullName:fullName,
      role: role as UserRole,
      status: 'inactive'
    })
    console.log("new user created: ", fullName, role);
  }
}

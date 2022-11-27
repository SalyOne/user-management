import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../interfaces";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent{
  @Input() userme?: IUser;
  @Output() statusChanged: EventEmitter<UserStatus> = new EventEmitter<UserStatus>();
  @Output() roleChanged: EventEmitter<UserRole> = new EventEmitter<UserRole>();

  changeStatus(status: UserStatus) {
    console.log('change status from user-item: ',  status);
    this.statusChanged.emit(status);
  }

  changeRole(role: UserRole) {
    console.log('change role from user-item: ',  role);
    this.roleChanged.emit(role);

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }
}

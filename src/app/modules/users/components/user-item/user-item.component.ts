import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../../../interfaces";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit{
  @Input() userme?: IUser;
  @Input() index!: number;
  // @Output() statusChanged: EventEmitter<UserStatus> = new EventEmitter<UserStatus>();
  // @Output() roleChanged: EventEmitter<UserRole> = new EventEmitter<UserRole>();

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    // this.userService.init(this.userme!);
  }
  changeStatus(status: UserStatus) {
    this.userService.changeStatus(status, this.index)
  }

  changeRole(role: UserRole) {
    this.userService.changeRole(role, this.index)

  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }
}

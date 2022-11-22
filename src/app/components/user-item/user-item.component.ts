import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent{
  @Input() user?: IUser;


  changeStatus(activate: string) {

  }
}

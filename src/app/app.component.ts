import { Component } from '@angular/core';
import {IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angLesson7.1';
  users: IUser[]=[];
  addUser(user: IUser) {
    this.users.push(user)
    console.log("new User Created: ", user)
  }
}

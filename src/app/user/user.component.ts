import { Component } from '@angular/core';
import {DUMMY_USERS, randomUser} from "../DUMMY_USER";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedUser = DUMMY_USERS[randomUser];
}

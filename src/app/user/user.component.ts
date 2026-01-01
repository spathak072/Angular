import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS, randomUser} from "../DUMMY_USER";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUser()]) ;
  imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectedUser(){
    console.log('selectedUser');
    // this.selectedUser = DUMMY_USERS[randomUser()];
    this.selectedUser.set(DUMMY_USERS[randomUser()])
  }
}

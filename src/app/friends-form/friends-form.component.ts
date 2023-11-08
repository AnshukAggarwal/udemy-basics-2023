import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrls: ['./friends-form.component.css'],
})
export class FriendsFormComponent {
  newFriendName: string = '';
  @Output() friendAdded = new EventEmitter<string>();

  addFriend() {
    if (this.newFriendName.length > 0) {
      //console.log(this.newFriendName);
      this.friendAdded.emit(this.newFriendName);
    } else {
      console.warn('Add a friend');
    }
  }
}

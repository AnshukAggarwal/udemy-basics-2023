import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  friendName:string= "Anshuk";
  friendStatus:string = "Friend"
  @Input() friend =""
}

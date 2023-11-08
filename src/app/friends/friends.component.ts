import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent {
  // isBtnDisabled:boolean= false;
  // newFriendName:string=""

  // constructor(){
  //   setTimeout(()=>{
  //     this.isBtnDisabled= !this.isBtnDisabled
  //   },5000)
  // }

  // // getFriendName(e:any){
  // //   this.newFriendName=e?.target?.value
  // // }
  // addFriend(){
  //   console.log(this.newFriendName)
  // }

  @Input() data = [];
  @Output() addNewFriend = new EventEmitter<string>();

  addedFriend(e: any) {
    this.addNewFriend.emit(e);
  }
}

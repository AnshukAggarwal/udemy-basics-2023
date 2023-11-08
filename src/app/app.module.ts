import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { FriendsFormComponent } from './friends-form/friends-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendComponent,
    FriendsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

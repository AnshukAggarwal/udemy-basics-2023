import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'udemy-basics';
  friends: any[] = ['Jack', 'John', 'Andrew'];

  onFriendAdded(friend: string) {
    this.friends.push(friend);
  }
}

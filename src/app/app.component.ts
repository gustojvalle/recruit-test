import {Component, OnInit} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmojiApp';
  constructor() {  }

}
/*
  bug 1: most of the intended emojis aren't showing up on the home page and there's some weird errors
  bug 2: leaderboard page isn't working when you click it in the menu

  task 1: Complete the leaderboard page.  Ordered by number of votes, descending, it should show each emoji that has been voted on along with the number of votes that emoji has received
          (note: because the back end is a mock, voting for any emoji doesn't actually affect the leaderboard API response)

  task 2: Need to add a mailing list page that has a text box for a user to enter their email, and a button to submit it.
          The button should make a GET api call to the following endpoint with the email entered to add it to the mailing list:        
                https://mocki.io/v1/8c323049-2995-4d61-990b-1ca10ef0d612?email={{email_address}}

  bonus: fix the site styles and make it responsive to fit on mobile

*/
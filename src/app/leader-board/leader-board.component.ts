import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO need to get the leaderboard from this endpoint - https://mocki.io/v1/520a98cf-d986-4e55-b7c8-bf005a772342
  }

}

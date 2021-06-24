import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  emojiVotes: {emoji: string, votes: number}[] = [];
  constructor(private apiService: ApiService) { }

  async loadVotes(): Promise<void> {
    this.emojiVotes = await this.apiService.getVotes();
  }
  ngOnInit(): void {
    this.loadVotes();
  }
}

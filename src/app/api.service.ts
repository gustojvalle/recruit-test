import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async submitVote(emoji: string): Promise<void> {
    await fetch(`https://mocki.io/v1/01366c7d-76b7-4440-89a4-055fae76bc91?emoji=${emoji}`);
  }

  async getVotes(): Promise<{ emoji: string, votes: number }[]> {
    /*api should be returning: 
    [
      {"emoji":"😂", "votes": 34},
      {"emoji": "💩", "votes": 1513},
      {"emoji":"😀", "votes": 143},
      {"emoji":"😃", "votes": 1},
      {"emoji":"😁", "votes": 100}         
    ];*/
    const apiResponse = await fetch("https://mocki.io/v1/01366c7d-76b7-4440-89a4-055fae76bc91")
    const votesObject = await apiResponse.json();

    return votesObject;
  }
}

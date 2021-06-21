import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO Need to add a contact us form that will make a request to the following
    //  - https://mocki.io/v1/01c38717-93a2-4809-bfb0-3230423b90a7?message={{message}}&email={{email}}
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss']
})
export class MailingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO Need to create a form to capture users email addresses and submit to https://mocki.io/v1/8c323049-2995-4d61-990b-1ca10ef0d612?email={{email_address}}
  }

}

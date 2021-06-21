import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {MailingListComponent} from './mailing-list/mailing-list.component';

const routes: Routes = [
  { path: 'leaderboerd', component: LeaderBoardComponent },
  { path: 'mailing-list', component: MailingListComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SorryComponent } from './sorry/sorry.component';
import { SurgicalTeamComponent } from './surgical-team/surgical-team.component';
import { TrainingComponent } from './training/training.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { MediaComponent } from './media/media.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  {path: "sorry", component: SorryComponent},
  {path: "home", component : HomeComponent},
  {path: "whoweare", component : WhoweareComponent},
  {path: "surgical", component : SurgicalTeamComponent},
  {path: "training", component : TrainingComponent},
  {path: "media", component : MediaComponent},
  {path: "donate", component : DonateComponent},
  {path : "", redirectTo : "/home", pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

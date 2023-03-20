import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SorryComponent } from './sorry/sorry.component';
import { SurgicalTeamComponent } from './surgical-team/surgical-team.component';
import { TrainingComponent } from './training/training.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { MediaComponent } from './media/media.component';
import { DonateComponent } from './donate/donate.component';
import { TentTypeComponent } from './tent-type/tent-type.component';
import { MedicTrainComponent } from './medic-train/medic-train.component';
import { ActionlistComponent } from './actionlist/actionlist.component';
import { CarTypeComponent } from './car-type/car-type.component';

const routes: Routes = [
  {path: "sorry", component: SorryComponent},
  {path: "", component : HomeComponent},
  {path: "whoweare", component : WhoweareComponent},
  {path: "surgical", component : SurgicalTeamComponent},
  {path: "training", component : TrainingComponent},
  {path: "media", component : MediaComponent},
  {path: "donate", component : DonateComponent},
  {path: "tent-type", component : TentTypeComponent},
  {path: "training", component : TrainingComponent},
  {path : "medic", component : MedicTrainComponent},
  {path : "action", component : ActionlistComponent},
  {path : "tent-type", component : TentTypeComponent},
  {path : "car-type", component : CarTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

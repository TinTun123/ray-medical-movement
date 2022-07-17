import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SorryComponent } from './sorry/sorry.component';
import { WhoweareComponent } from './whoweare/whoweare.component';

const routes: Routes = [
  {path: "sorry", component: SorryComponent},
  {path: "home", component : HomeComponent},
  {path: "whoweare", component : WhoweareComponent},
  {path : "", redirectTo : "/home", pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

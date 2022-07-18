import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardListComponent } from './card-list/card-list.component';
import { SorryComponent } from './sorry/sorry.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhoneSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from './action/action.component';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { SurgicalTeamComponent } from './surgical-team/surgical-team.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent,
    CardListComponent,
    SorryComponent,
    HomeComponent,
    FooterComponent,
    WhoweareComponent,
    ActionComponent,
    SurgicalTeamComponent,
    TrainingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library : FaIconLibrary) {
    library.addIcons(
      faPlus,
      faPhoneSquare,
      faArrowDown
      )
  }
 }

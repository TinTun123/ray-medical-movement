import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdsenseModule } from 'ng2-adsense';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardListComponent } from './card-list/card-list.component';
import { SorryComponent } from './sorry/sorry.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhoneSquare, faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from './action/action.component';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { SurgicalTeamComponent } from './surgical-team/surgical-team.component';
import { TrainingComponent } from './training/training.component';
import { MediaComponent } from './media/media.component';
import { DonateComponent } from './donate/donate.component';
import { TentTypeComponent } from './tent-type/tent-type.component';
import { CarTypeComponent } from './car-type/car-type.component';
import { MedicTrainComponent } from './medic-train/medic-train.component';
import { FirstaidTrainComponent } from './firstaid-train/firstaid-train.component';
import { ActionlistComponent } from './actionlist/actionlist.component';
import { NavComponent } from './nav/nav.component';

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
    MediaComponent,
    DonateComponent,
    TentTypeComponent,
    CarTypeComponent,
    MedicTrainComponent,
    FirstaidTrainComponent,
    ActionlistComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    AdsenseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library : FaIconLibrary) {
    library.addIcons(
      faPlus,
      faPhoneSquare,
      faArrowDown,
      faAngleDown
      )
  }
 }

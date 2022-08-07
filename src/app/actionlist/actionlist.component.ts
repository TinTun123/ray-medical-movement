import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-actionlist',
  templateUrl: './actionlist.component.html',
  styleUrls: ['./actionlist.component.scss']
})
export class ActionlistComponent implements OnInit {



  cnt00 : string[] = [
    `First aid training/ Emergency trauma care training.`,
    `First aid training/ Emergency trauma care training.`
  ]

  cnt01 : string[] = [
    `Medic Training.`,
    `Medic Training.`
  ]
  cnt02 : string[] = [
    `Frontline Surgical.`,
    `Frontline Surgical.`
  ]

  cnt03 : string[] = [
    `Tent Type Operation Theatre.`,
    `Tent Type Operation Theatre.`
  ]

  cnt04 : string[] = [
    `Mobile car-type Operation theatre.`,
    `Mobile car-type Operation theatre.`
  ]

  constructor(private languageService : LanguageService) { }
  language : string = 'mu';
  ngOnInit(): void {
    this.languageService.subject.subscribe((lan) => {
      this.change_lan(lan);
    })
  }

  change_lan(lan : any) {
    this.language = lan;
  }

}

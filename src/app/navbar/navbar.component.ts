import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  
  // faplus = faPlus;
  // faminus = faMinus;
  drop : Boolean = false;
  toggl : Boolean = false;
  language_drop : Boolean = false;
  surgical_drop : Boolean = false;
  train_drop : Boolean = false;

  constructor(private language : LanguageService) { }

  ngOnInit(): void {
  }

  toggle() : void {
    this.toggl = !this.toggl
  }

  drop_method() : void {
    if(this.language_drop) {
      this.language_toggle();
    }
  
  this.drop = !this.drop;


  }

  language_toggle() : void {
    if(this.drop) {
      this.drop_method();
    }
    this.language_drop = !this.language_drop;
  }

  change_lan(lan : string) : void {
    this.language_toggle();

    this.language.change_lan(lan);
   
    
  }

  drop_surgical() {
    this.surgical_drop = !this.surgical_drop;
  }

  train_toggle() : void {
    this.train_drop = !this.train_drop;
  }

}

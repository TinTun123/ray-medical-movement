import { Component, OnInit } from '@angular/core';
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
  toggl : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() : void {
    this.toggl = !this.toggl
  }

}

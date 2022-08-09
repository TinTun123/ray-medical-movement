import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  language : string = 'mm';

  public subject = new Subject();

  change_lan(lan : string) : void {
    this.subject.next(lan);
    // console.log(this.language);
    this.language = lan;

    
  }

  get_lan() : string {
    return this.language;
  }
}

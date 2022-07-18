import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  language : string = 'mu';

  public subject = new Subject();

  change_lan(lan : string) : void {
    this.subject.next(lan);
  }

  get_lan() : string {
    return this.language;
  }
}

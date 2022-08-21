import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.scss']
})
export class CarTypeComponent implements OnInit {

  constructor(config : NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }
   images = ['image0', 'image02', 'tent-type01', 'something01', 'something02'].map(n => `../../assets/image/${n}.jpg`);

  ngOnInit(): void {
  }

}

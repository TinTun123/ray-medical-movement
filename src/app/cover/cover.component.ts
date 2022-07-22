import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  providers : [NgbCarouselConfig]
})
export class CoverComponent implements OnInit {

  images = ['surgical', 'trainingresize', 'training', 'medic-training', 'preimaryhealth'].map(n => `../../assets/image/${n}.jpg`);

  constructor(config : NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}

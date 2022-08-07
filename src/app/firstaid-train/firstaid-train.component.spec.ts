import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidTrainComponent } from './firstaid-train.component';

describe('FirstaidTrainComponent', () => {
  let component: FirstaidTrainComponent;
  let fixture: ComponentFixture<FirstaidTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstaidTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaidTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

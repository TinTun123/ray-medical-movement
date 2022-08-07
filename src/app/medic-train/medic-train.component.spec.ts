import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicTrainComponent } from './medic-train.component';

describe('MedicTrainComponent', () => {
  let component: MedicTrainComponent;
  let fixture: ComponentFixture<MedicTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

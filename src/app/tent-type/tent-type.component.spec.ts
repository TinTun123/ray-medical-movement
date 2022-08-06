import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentTypeComponent } from './tent-type.component';

describe('TentTypeComponent', () => {
  let component: TentTypeComponent;
  let fixture: ComponentFixture<TentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

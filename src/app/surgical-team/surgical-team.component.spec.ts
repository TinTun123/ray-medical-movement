import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalTeamComponent } from './surgical-team.component';

describe('SurgicalTeamComponent', () => {
  let component: SurgicalTeamComponent;
  let fixture: ComponentFixture<SurgicalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderAndAccessDateComponent } from './calender-and-access-date.component';

describe('CalenderAndAccessDateComponent', () => {
  let component: CalenderAndAccessDateComponent;
  let fixture: ComponentFixture<CalenderAndAccessDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderAndAccessDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderAndAccessDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

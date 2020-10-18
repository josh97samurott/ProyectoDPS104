import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDoctorComponent } from './video-doctor.component';

describe('VideoDoctorComponent', () => {
  let component: VideoDoctorComponent;
  let fixture: ComponentFixture<VideoDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

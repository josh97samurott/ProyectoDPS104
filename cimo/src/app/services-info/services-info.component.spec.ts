import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesInfoComponent } from './services-info.component';

describe('ServicesInfoComponent', () => {
  let component: ServicesInfoComponent;
  let fixture: ComponentFixture<ServicesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

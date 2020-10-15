import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCimoComponent } from './management-cimo.component';

describe('ManagementCimoComponent', () => {
  let component: ManagementCimoComponent;
  let fixture: ComponentFixture<ManagementCimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

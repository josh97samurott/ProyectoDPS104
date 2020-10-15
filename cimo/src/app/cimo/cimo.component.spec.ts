import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimoComponent } from './cimo.component';

describe('CimoComponent', () => {
  let component: CimoComponent;
  let fixture: ComponentFixture<CimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

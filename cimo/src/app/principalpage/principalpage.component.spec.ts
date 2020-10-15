import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalpageComponent } from './principalpage.component';

describe('PrincipalpageComponent', () => {
  let component: PrincipalpageComponent;
  let fixture: ComponentFixture<PrincipalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

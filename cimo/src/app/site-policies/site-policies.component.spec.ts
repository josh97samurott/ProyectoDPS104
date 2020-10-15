import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePoliciesComponent } from './site-policies.component';

describe('SitePoliciesComponent', () => {
  let component: SitePoliciesComponent;
  let fixture: ComponentFixture<SitePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitePoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

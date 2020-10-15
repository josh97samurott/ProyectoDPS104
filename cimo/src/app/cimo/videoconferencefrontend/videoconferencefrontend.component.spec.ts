import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconferencefrontendComponent } from './videoconferencefrontend.component';

describe('VideoconferencefrontendComponent', () => {
  let component: VideoconferencefrontendComponent;
  let fixture: ComponentFixture<VideoconferencefrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoconferencefrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconferencefrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

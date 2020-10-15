import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatfrontendComponent } from './chatfrontend.component';

describe('ChatfrontendComponent', () => {
  let component: ChatfrontendComponent;
  let fixture: ComponentFixture<ChatfrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatfrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatfrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

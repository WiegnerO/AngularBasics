import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtComponentCommunicationComponent } from './at-component-communication.component';

describe('AtComponentCommunicationComponent', () => {
  let component: AtComponentCommunicationComponent;
  let fixture: ComponentFixture<AtComponentCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtComponentCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

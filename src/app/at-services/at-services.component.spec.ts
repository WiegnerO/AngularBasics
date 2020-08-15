import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtServicesComponent } from './at-services.component';

describe('AtServicesComponent', () => {
  let component: AtServicesComponent;
  let fixture: ComponentFixture<AtServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtObservablesComponent } from './at-observables.component';

describe('AtObservablesComponent', () => {
  let component: AtObservablesComponent;
  let fixture: ComponentFixture<AtObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

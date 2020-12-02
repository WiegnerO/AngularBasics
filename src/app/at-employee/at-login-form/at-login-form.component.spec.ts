import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLoginFormComponent } from './at-login-form.component';

describe('AtLoginFormComponent', () => {
  let component: AtLoginFormComponent;
  let fixture: ComponentFixture<AtLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

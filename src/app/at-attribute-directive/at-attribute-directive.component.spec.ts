import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAttributeDirectiveComponent } from './at-attribute-directive.component';

describe('AtAttributeDirectiveComponent', () => {
  let component: AtAttributeDirectiveComponent;
  let fixture: ComponentFixture<AtAttributeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtAttributeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

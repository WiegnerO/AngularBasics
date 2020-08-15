import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtStructuralDirectiveComponent } from './at-structural-directive.component';

describe('AtStructuralDirectiveComponent', () => {
  let component: AtStructuralDirectiveComponent;
  let fixture: ComponentFixture<AtStructuralDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtStructuralDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

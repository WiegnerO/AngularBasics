import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEmployeeComponent } from './at-employee.component';

describe('AtEmployeeComponent', () => {
  let component: AtEmployeeComponent;
  let fixture: ComponentFixture<AtEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

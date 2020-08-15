import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEmployeeListComponent } from './at-employee-list.component';

describe('AtEmployeeListComponent', () => {
  let component: AtEmployeeListComponent;
  let fixture: ComponentFixture<AtEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEmployeeForumComponent } from './at-employee-forum.component';

describe('AtEmployeeForumComponent', () => {
  let component: AtEmployeeForumComponent;
  let fixture: ComponentFixture<AtEmployeeForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEmployeeForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEmployeeForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

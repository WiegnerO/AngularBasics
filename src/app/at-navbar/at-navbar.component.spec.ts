import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtNavbarComponent } from './at-navbar.component';

describe('AtNavbarComponent', () => {
  let component: AtNavbarComponent;
  let fixture: ComponentFixture<AtNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

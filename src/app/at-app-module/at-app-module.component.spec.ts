import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAppModuleComponent } from './at-app-module.component';

describe('AtAppModuleComponent', () => {
  let component: AtAppModuleComponent;
  let fixture: ComponentFixture<AtAppModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtAppModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtAppModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

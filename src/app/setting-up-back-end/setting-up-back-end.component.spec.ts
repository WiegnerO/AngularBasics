import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpBackEndComponent } from './setting-up-back-end.component';

describe('SettingUpBackEndComponent', () => {
  let component: SettingUpBackEndComponent;
  let fixture: ComponentFixture<SettingUpBackEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingUpBackEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUpBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

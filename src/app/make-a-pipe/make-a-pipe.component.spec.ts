import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAPipeComponent } from './make-a-pipe.component';

describe('MakeAPipeComponent', () => {
  let component: MakeAPipeComponent;
  let fixture: ComponentFixture<MakeAPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

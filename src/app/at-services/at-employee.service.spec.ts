import { TestBed } from '@angular/core/testing';

import { AtEmployeeService } from './at-employee.service';

describe('AtEmployeeService', () => {
  let service: AtEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

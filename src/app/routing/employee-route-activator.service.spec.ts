import { TestBed } from '@angular/core/testing';

import { EmployeeRouteActivatorService } from './employee-route-activator.service';

describe('EmployeeRouteActivatorService', () => {
  let service: EmployeeRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

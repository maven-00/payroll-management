import { TestBed } from '@angular/core/testing';

import { LateservicesService } from './lateservices.service';

describe('LateservicesService', () => {
  let service: LateservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LateservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

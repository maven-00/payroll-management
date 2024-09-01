import { TestBed } from '@angular/core/testing';

import { LocationSetupService } from './location-setup.service';

describe('LocationSetupService', () => {
  let service: LocationSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

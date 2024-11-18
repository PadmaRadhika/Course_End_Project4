import { TestBed } from '@angular/core/testing';

import { PetRegistrationService } from './pet-registration.service';

describe('PetRegistrationService', () => {
  let service: PetRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServicePersonaService } from './service-persona.service';

describe('ServicePersonaService', () => {
  let service: ServicePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

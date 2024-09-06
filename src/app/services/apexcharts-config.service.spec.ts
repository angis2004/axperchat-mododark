import { TestBed } from '@angular/core/testing';

import { ApexchartsConfigService } from './apexcharts-config.service';

describe('ApexchartsConfigService', () => {
  let service: ApexchartsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexchartsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

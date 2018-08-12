import { TestBed, inject } from '@angular/core/testing';

import { BusinessToolsLibService } from './business-tools-lib.service';

describe('BusinessToolsLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessToolsLibService]
    });
  });

  it('should be created', inject([BusinessToolsLibService], (service: BusinessToolsLibService) => {
    expect(service).toBeTruthy();
  }));
});

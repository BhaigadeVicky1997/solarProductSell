import { TestBed } from '@angular/core/testing';

import { CommonutiltyService } from './commonutilty.service';

describe('CommonutiltyService', () => {
  let service: CommonutiltyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonutiltyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

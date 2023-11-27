import { TestBed } from '@angular/core/testing';

import { PwaDetectorService } from './pwa-detector.service';

describe('PwaDetectorService', () => {
  let service: PwaDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

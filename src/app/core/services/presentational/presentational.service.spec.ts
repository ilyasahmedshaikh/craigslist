import { TestBed } from '@angular/core/testing';

import { PresentationalService } from './presentational.service';

describe('PresentationalService', () => {
  let service: PresentationalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentationalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

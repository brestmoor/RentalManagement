import {inject, TestBed} from '@angular/core/testing';

import {GuestSearchService} from './guest-search.service';

describe('GuestSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestSearchService]
    });
  });

  it('should be created', inject([GuestSearchService], (service: GuestSearchService) => {
    expect(service).toBeTruthy();
  }));
});

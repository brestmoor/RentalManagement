import {inject, TestBed} from '@angular/core/testing';

import {DisplayReservationConverterService} from './display-reservation-converter.service';

describe('DisplayReservationConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayReservationConverterService]
    });
  });

  it('should be created', inject([DisplayReservationConverterService], (service: DisplayReservationConverterService) => {
    expect(service).toBeTruthy();
  }));
});

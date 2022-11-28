/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountriesApiService } from './countries-api.service';

describe('Service: CountriesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesApiService]
    });
  });

  it('should ...', inject([CountriesApiService], (service: CountriesApiService) => {
    expect(service).toBeTruthy();
  }));
});

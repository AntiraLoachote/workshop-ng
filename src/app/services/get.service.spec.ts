/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetService } from './get.service';

describe('Service: Get', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetService]
    });
  });

  it('should ...', inject([GetService], (service: GetService) => {
    expect(service).toBeTruthy();
  }));
});
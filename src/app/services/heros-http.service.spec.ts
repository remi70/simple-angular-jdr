import { TestBed } from '@angular/core/testing';

import { HerosHttpService } from './heros-http.service';

describe('HerosHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerosHttpService = TestBed.get(HerosHttpService);
    expect(service).toBeTruthy();
  });
});

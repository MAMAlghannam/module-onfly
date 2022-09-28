import { TestBed } from '@angular/core/testing';

import { ModuleOnFlyService } from './module-on-fly.service';

describe('ModuleOnFlyService', () => {
  let service: ModuleOnFlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleOnFlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

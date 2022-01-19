import { TestBed } from '@angular/core/testing';

import { ServicosInterfaceService } from './servicos-interface.service';

describe('ServicosInterfaceService', () => {
  let service: ServicosInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

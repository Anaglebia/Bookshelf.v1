import { TestBed } from '@angular/core/testing';

import { AutenticacaoFireBaseService } from './autenticacao-fire-base.service';

describe('AutenticacaoFireBaseService', () => {
  let service: AutenticacaoFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CardButtonsService } from './card-buttons.service';

describe('CardButtonsService', () => {
  let service: CardButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

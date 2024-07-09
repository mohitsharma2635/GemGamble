/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserInfoServiceService } from './UserInfoService.service';

describe('Service: UserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInfoServiceService]
    });
  });

  it('should ...', inject([UserInfoServiceService], (service: UserInfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PostingCategoryService } from './posting-category.service';

describe('PostingCategoryService', () => {
  let service: PostingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

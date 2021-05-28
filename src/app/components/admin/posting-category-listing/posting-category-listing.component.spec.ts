import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingCategoryListingComponent } from './posting-category-listing.component';

describe('PostingCategoryListingComponent', () => {
  let component: PostingCategoryListingComponent;
  let fixture: ComponentFixture<PostingCategoryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingCategoryListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingCategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

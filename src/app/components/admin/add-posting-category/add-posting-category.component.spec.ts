import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostingCategoryComponent } from './add-posting-category.component';

describe('AddPostingCategoryComponent', () => {
  let component: AddPostingCategoryComponent;
  let fixture: ComponentFixture<AddPostingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

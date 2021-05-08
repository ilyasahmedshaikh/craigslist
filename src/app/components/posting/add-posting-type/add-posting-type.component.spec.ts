import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostingTypeComponent } from './add-posting-type.component';

describe('AddPostingTypeComponent', () => {
  let component: AddPostingTypeComponent;
  let fixture: ComponentFixture<AddPostingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

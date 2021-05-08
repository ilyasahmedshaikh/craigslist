import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAPostingComponent } from './create-a-posting.component';

describe('CreateAPostingComponent', () => {
  let component: CreateAPostingComponent;
  let fixture: ComponentFixture<CreateAPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

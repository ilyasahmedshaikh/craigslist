import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostingsComponent } from './view-postings.component';

describe('ViewPostingsComponent', () => {
  let component: ViewPostingsComponent;
  let fixture: ComponentFixture<ViewPostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

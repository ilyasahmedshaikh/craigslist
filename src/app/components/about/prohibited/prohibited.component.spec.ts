import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedComponent } from './prohibited.component';

describe('ProhibitedComponent', () => {
  let component: ProhibitedComponent;
  let fixture: ComponentFixture<ProhibitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProhibitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfCompanyComponent } from './best-of-company.component';

describe('BestOfCompanyComponent', () => {
  let component: BestOfCompanyComponent;
  let fixture: ComponentFixture<BestOfCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOfCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

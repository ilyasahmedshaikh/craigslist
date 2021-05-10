import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAboutComponent } from './company-about.component';

describe('CompanyAboutComponent', () => {
  let component: CompanyAboutComponent;
  let fixture: ComponentFixture<CompanyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

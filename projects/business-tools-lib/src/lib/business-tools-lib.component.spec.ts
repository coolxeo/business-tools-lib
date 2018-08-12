import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessToolsLibComponent } from './business-tools-lib.component';

describe('BusinessToolsLibComponent', () => {
  let component: BusinessToolsLibComponent;
  let fixture: ComponentFixture<BusinessToolsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessToolsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessToolsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

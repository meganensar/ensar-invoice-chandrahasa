import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInvoice3Component } from './pay-invoice3.component';

describe('PayInvoice3Component', () => {
  let component: PayInvoice3Component;
  let fixture: ComponentFixture<PayInvoice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayInvoice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayInvoice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

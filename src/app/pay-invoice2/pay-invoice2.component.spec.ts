import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInvoice2Component } from './pay-invoice2.component';

describe('PayInvoice2Component', () => {
  let component: PayInvoice2Component;
  let fixture: ComponentFixture<PayInvoice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayInvoice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayInvoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

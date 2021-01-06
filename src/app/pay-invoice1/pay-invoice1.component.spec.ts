import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInvoice1Component } from './pay-invoice1.component';

describe('PayInvoice1Component', () => {
  let component: PayInvoice1Component;
  let fixture: ComponentFixture<PayInvoice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayInvoice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayInvoice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

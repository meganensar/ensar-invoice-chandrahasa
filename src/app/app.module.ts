import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { PreviewComponent } from './preview/preview.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { SendingEmailComponent } from './sending-email/sending-email.component';
import { MyInvoiceComponent } from './my-invoice/my-invoice.component';
import { ScreenComponent } from './screen/screen.component';
import { PayInvoice1Component } from './pay-invoice1/pay-invoice1.component';
import { PayInvoice2Component } from './pay-invoice2/pay-invoice2.component';
import { PayInvoice3Component } from './pay-invoice3/pay-invoice3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    Dashboard1Component,
    PreviewComponent,
    InvoiceComponent,
    SendingEmailComponent,
    MyInvoiceComponent,
    ScreenComponent,
    PayInvoice1Component,
    PayInvoice2Component,
    PayInvoice3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

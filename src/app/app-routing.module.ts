import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MyInvoiceComponent } from "./my-invoice/my-invoice.component";
import { PayInvoice1Component } from "./pay-invoice1/pay-invoice1.component";
import { PayInvoice2Component } from "./pay-invoice2/pay-invoice2.component";
import { PayInvoice3Component } from "./pay-invoice3/pay-invoice3.component";
import { PreviewComponent } from "./preview/preview.component";
import { ScreenComponent } from "./screen/screen.component";
import { SendingEmailComponent } from "./sending-email/sending-email.component";
const appRoutes: Routes = [
    {path: '', redirectTo: '/login-page', pathMatch: 'full'},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'dashboard1', component: Dashboard1Component},
    {path: 'preview', component: PreviewComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: 'send', component: SendingEmailComponent},
    {path: 'my-invoice', component: MyInvoiceComponent},
    {path: 'screen7', component: ScreenComponent},
    {path: 'payinvoice1', component: PayInvoice1Component},
    {path: 'payinvoice2', component: PayInvoice2Component},
    {path: 'payinvoice3', component: PayInvoice3Component},
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
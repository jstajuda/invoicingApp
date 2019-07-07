import { CustomersComponent } from './invoicing/customers/customers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './hero/index/index.component';
import { InvoiceComponent } from './invoicing/invoice/invoice.component';
import { ContactComponent } from './contact/contact/contact.component';
import { CustomersCreateComponent } from './invoicing/customers-create/customers-create.component';
import { CustomersDetailsComponent } from './invoicing/customers-details/customers-details.component';
import { CustomersEditComponent } from './invoicing/customers-edit/customers-edit.component';
import { SettingsComponent } from './invoicing/settings/settings.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'invoicing', component: InvoiceComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customers/create', component: CustomersCreateComponent},
  {path: 'customers/:id', component: CustomersDetailsComponent},
  {path: 'customers/:id/edit', component: CustomersEditComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

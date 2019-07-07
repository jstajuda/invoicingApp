import { CustomerServiceService } from './customer-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicePositionsComponent } from './invoice-positions/invoice-positions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SinglePositionComponent } from './single-position/single-position.component';
import { PriceCalculator } from './model/price-calculation/price-calculator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ItemCatalog } from './model/item-catalog/item-catalog';
import { LocalItemCatalog } from './model/item-catalog/local-item-catalog';
import { HttpItemCatalog } from './model/item-catalog/http-item-catalog';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoiceHeaderComponent } from './invoice-header/invoice-header.component';
import { SingleCustomerPositionComponent } from './single-customer-position/single-customer-position.component';
import { CustomerRepository } from './model/customer/customer-repository';
import { CustomersCreateComponent } from './customers-create/customers-create.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

@NgModule({
  declarations: [InvoicePositionsComponent, InvoiceComponent, SinglePositionComponent, InvoiceSummaryComponent, 
    CustomersComponent, InvoiceHeaderComponent, SingleCustomerPositionComponent, CustomersCreateComponent, 
    CustomersDetailsComponent, CustomersEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [InvoiceComponent],
  providers: [
    {
      provide: PriceCalculator, useFactory: () => new PriceCalculator()
    },
    // {
    //   provide: ItemCatalog, useFactory: () => new LocalItemCatalog()
    // }
    {
      provide: ItemCatalog, useFactory: (http: HttpClient) => new HttpItemCatalog(http), deps: [HttpClient]
    },
    {
      provide: CustomerRepository, useFactory: () => new CustomerRepository()
    }
  ]
})
export class InvoicingModule { }

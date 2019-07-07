import { SettingsRepository } from './../model/settings/settingsRepository';
import { CustomerRepository } from './../model/customer/customer-repository';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer/customer';
import { Settings } from '../model/settings/settings';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class InvoiceHeaderComponent implements OnInit {
  
  settings: Settings;
  customers: Customer[];
  client: Customer;

  constructor(private customerRepo: CustomerRepository,
              private settingsRepo: SettingsRepository) { 
    this.settings = settingsRepo.getSettings();
    this.customers = this.customerRepo.getAll();
  }

  ngOnInit() {
  }

  selectClient(id: number) {
    this.client = this.customerRepo.getById(id);
  }

}

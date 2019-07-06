import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer/customer';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class InvoiceHeaderComponent implements OnInit {
  
  @Input()
  seller: Customer;

  @Input()
  buyer: Customer;

  constructor() { 
    this.seller = new Customer(1, 'Seller', '123456789', 'street 1/2', 'city', '12-345', '123 456 789');
    this.buyer = new Customer(1, 'Buyer', '123456789', 'street 1/2', 'city', '12-345', '123 456 789');
  }

  ngOnInit() {
  }

}

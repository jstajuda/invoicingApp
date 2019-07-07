import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/customer/customer';
import { Router } from "@angular/router";

@Component({
  selector: '[app-single-customer-position]',
  templateUrl: './single-customer-position.component.html',
  styleUrls: ['./single-customer-position.component.scss']
})
export class SingleCustomerPositionComponent implements OnInit {

  @Input()
  customer: Customer;

  @Output()
  customerRemoved: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editCustomer() {
    this.router.navigateByUrl('/customers/' + this.customer.id + '/edit');
  }

  removeCustomer() {
    this.customerRemoved.emit(this.customer);
  }

}

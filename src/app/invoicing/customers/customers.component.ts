import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer/customer';
import { CustomerRepository } from '../model/customer/customer-repository';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[];

  constructor(private customerRepo: CustomerRepository) { }

  ngOnInit() {
    this.customers = [

    ];

  }

}

import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer/customer';
import { CustomerRepository } from '../model/customer/customer-repository';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[];

  constructor(private customerRepo: CustomerRepository,
              private router: Router) { }

  ngOnInit() {
    // let customerRepo = new CustomerRepository();
    this.customers = this.customerRepo.getAll();
  }

  removeCustomer(customer: Customer): void {
    console.log('customer to remove' + customer.name);
  }

  addCustomer(): void {
    this.router.navigateByUrl('/customers/create');
  }

}

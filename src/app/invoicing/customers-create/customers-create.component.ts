import { CustomerRepository } from './../model/customer/customer-repository';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../model/customer/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.scss']
})
export class CustomersCreateComponent implements OnInit {

  createCustomerForm = this.fb.group({
    name: ['', [Validators.maxLength(255)]],
    taxNumber: [''],
    streetAddress: [''],
    city: [''],
    zipCode: [''],
    phoneNumber: ['']
  });

  constructor(private customerRepo: CustomerRepository,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  createCustomer() {
    // const customer = new Customer(this.customerRepo.count() + 1, 'Nowy klient');
    // this.customerRepo.add(customer);
    // this.router.navigateByUrl('/customers');
    console.log(`${this.createCustomerForm}`);
  }

}

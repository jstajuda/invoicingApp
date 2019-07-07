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
    name: ['', [Validators.maxLength(255), Validators.minLength(3), Validators.required]],
    taxNumber: ['', [Validators.minLength(9), Validators.maxLength(9)]],
    streetAddress: [''],
    city: [''],
    zipCode: [''],
    phoneNumber: ['']
  });

  get name() { return this.createCustomerForm.get('name'); }
  get taxNumber() { return this.createCustomerForm.get('taxNumber'); }
  get streetAddress() { return this.createCustomerForm.get('streetAddress'); }
  get city() { return this.createCustomerForm.get('city'); }
  get zipCode() { return this.createCustomerForm.get('zipCode'); }
  get phoneNumber() { return this.createCustomerForm.get('phoneNumber'); }

  constructor(private customerRepo: CustomerRepository,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  createCustomer() {
    const customer = new Customer(
      this.customerRepo.getNextId(),
      this.name.value,
      this.taxNumber.value,
      this.streetAddress.value,
      this.city.value,
      this.zipCode.value,
      this.phoneNumber.value);

    this.customerRepo.add(customer);
    this.router.navigateByUrl('/customers');
  }

}

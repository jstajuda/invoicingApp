import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerRepository } from '../model/customer/customer-repository';
import { Customer } from '../model/customer/customer';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit {

  customer: Customer;

  editCustomerForm: FormGroup; 

  get name() { return this.editCustomerForm.get('name'); }
  get taxNumber() { return this.editCustomerForm.get('taxNumber'); }
  get streetAddress() { return this.editCustomerForm.get('streetAddress'); }
  get city() { return this.editCustomerForm.get('city'); }
  get zipCode() { return this.editCustomerForm.get('zipCode'); }
  get phoneNumber() { return this.editCustomerForm.get('phoneNumber'); }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customersRepo: CustomerRepository,
              private fb: FormBuilder) {

    const id = this.route.snapshot.paramMap.get('id');
    this.customer = this.customersRepo.getById(Number(id));
  }

  ngOnInit() {
    this.editCustomerForm = this.fb.group({
      name: [this.customer.name, [Validators.maxLength(255), Validators.minLength(3), Validators.required]],
      taxNumber: [this.customer.taxNumber, [Validators.minLength(9), Validators.maxLength(9)]],
      streetAddress: [this.customer.streetAddress],
      city: [this.customer.city],
      zipCode: [this.customer.zipCode],
      phoneNumber: [this.customer.phoneNumber]
    });
  }

  updateCustomer() {
    Object.keys(this.editCustomerForm.controls).forEach(prop => {
      this.customer[prop] = this.editCustomerForm.get(prop).value;
    });
    this.customersRepo.update(this.customer);
    this.router.navigateByUrl('/customers');
  }
}

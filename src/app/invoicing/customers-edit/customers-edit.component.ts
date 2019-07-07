import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerRepository } from '../model/customer/customer-repository';
import { Customer } from '../model/customer/customer';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private customersRepo: CustomerRepository) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.customer = this.customersRepo.getById(Number(id));
  }

}

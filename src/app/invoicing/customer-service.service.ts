import { Injectable } from '@angular/core';
import { CustomerRepository } from './model/customer/customer-repository';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }
}

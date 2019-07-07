import { Customer } from './customer';
import { CustomersComponent } from '../../customers/customers.component';
// import { fake } from "faker";

export class CustomerRepository {

    customerList: Customer[];

    constructor() {
        this.customerList = [
            new Customer(1, 'Firma Pierwsza', '123456789', 'Ulica 1/2', 'Miasto', '12-345', '123 456 789'),
            new Customer(2, 'cust 2', '123456789', 'street 1/2', 'city', '12-345', '123 456 789'),
            new Customer(3, 'cust 3', '123456789', 'street 1/2', 'city', '12-345', '123 456 789'),
            new Customer(4, 'cust 4', '123456789', 'street 1/2', 'city', '12-345', '123 456 789'),
            new Customer(5, 'cust 5', '123456789', 'street 1/2', 'city', '12-345', '123 456 789'),
        ];
    }

    getAll(): Customer[] {
        return this.customerList;
    }

    getById(id: number): Customer {
        return this.customerList.find(c => c.id === id);
    }

    add(customer: Customer) {
        this.customerList.push(customer);
    }

    update(customer: Customer) {
        this.customerList[this.findCustomerId(customer)] = customer;
    }

    delete(customer: Customer) {
        this.customerList.splice(this.findCustomerId(customer), 1);
    }

    findCustomerId(customer: Customer): number {
        return this.customerList.findIndex(c => c.id === customer.id);
    }

    count(): number {
        return this.customerList.length;
    }
}
import { zip } from 'rxjs';

export class Customer {
    id: number;
    name: string;
    taxNumber: string;
    streetAddress: string;
    city: string;
    zipCode: string;
    phoneNumber: string;

    constructor(id: number,
                name: string,
                taxNumber?: string,
                streetAddress?: string,
                city?: string,
                zipCode?: string,
                phoneNumber?: string) {
        this.id = id;
        this.name = name;
        this.taxNumber = taxNumber;
        this.streetAddress = streetAddress;
        this.city = city;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
    }
}
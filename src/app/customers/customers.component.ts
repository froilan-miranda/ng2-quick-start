import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from '../services/customer.service';

@Component({
	selector: 'my-customers',
	templateUrl: './customers.component.html',
	providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
	customers:Observable<Object[]>;

	constructor(private _customerService:CustomerService) {}

	ngOnInit(){
		this.customers = this._customerService.getCustomers();
	}
}

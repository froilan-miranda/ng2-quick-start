import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from '../services/customer.service';

@Component({
	selector: 'my-customers',
	templateUrl: './customers.component.html',
	providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
		customers:any;
	//customers:Promise<any[]>;
	//	customers:Observable<any[]>;
	constructor(private _customerService:CustomerService) {}

	ngOnInit(){
		this._customerService.getCustomers_RxObservable()
			.subscribe(
				(customers) => this.customers = customers,
				(err) => {console.log(err);
				}
			)

		//this._customerService.getCustomers()
			//.then((customers) => this.customers = customers)

		//this.customers = this._customerService.getCustomers();
	}
}

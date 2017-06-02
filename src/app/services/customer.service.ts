import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const URL_CUSTOMER = '../../assets/data/customer.json'

@Injectable()
export class CustomerService {
	constructor(private _http: Http) {}

	getCustomers() {
		return this._http.get(URL_CUSTOMER)
			.map((response:Response) => response.json())
			.catch(this._handlerError);
	}

	_handlerError(err: any, caught: Observable<any>){
		console.log(err);	//log this somewhere and format the message well for devs
		return Observable.throw(err); // our opportunity to customize this error
	}
}

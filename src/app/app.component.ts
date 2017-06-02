import { Component } from '@angular/core';

import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent  {

	//[] means property binding C -> D
	//() means event binding D ->

	title:string = 'Customer App';
	name:string = 'Froilan';
	myColor:string = 'red';


	changeNameColor(){
		//this.myColor = 'blue';
		this.myColor = this.myColor === 'blue' ? 'red' : 'blue';
	}
}

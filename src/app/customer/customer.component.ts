import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'my-customer',
    templateUrl:'./customer.component.html'
})
export class CustomerComponent implements OnInit {
    @Input() customer:{id:number, name:string};

		myColor:string = 'gray'
    constructor(){}

    ngOnInit(){}

}

import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an arrays of salePerson objects
  salesPersonList : SalesPerson[] = [
    new SalesPerson ("Simplice","Chedjou","chedjou@yahoo.com",40000),
    new SalesPerson ("Jean Pierre","Fossi","jeanpierre@yahoo.com",50000),
    new SalesPerson ("Christance","Nekame","neckChristanc@yahoo.com",60000),
    new SalesPerson ("Samuel","Kenmogne","samuel@yahoo.com",80000),
    new SalesPerson ("Clotilde","Kengne","clotildeKengne@gmail.com",20000),
    new SalesPerson ("Florence","Kuissi","florenceKuissu@yahoo.com",60000 )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

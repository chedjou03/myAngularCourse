import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-sales-person-list-boostrap',
  templateUrl: './sales-person-list-boostrap.component.html',
  styleUrls: ['./sales-person-list-boostrap.component.css']
})
export class SalesPersonListBoostrapComponent implements OnInit {

  studentList : Student[] = [
    new Student ("Jeffrey","Besos","jeffrey@yahoo.com",10000),
    new Student ("Sam","Walton","samwaltom@yahoo.com",20000),
    new Student ("Barrack","Obama","barrackobama@yahoo.com",30000),
    new Student ("Donal","Trum","donaltrump@yahoo.com",40000),
    new Student ("Steve","Cornackys","stevecorka@yahoo.com",50000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

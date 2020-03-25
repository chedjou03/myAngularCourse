import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-sales-person-list-boostrap',
  templateUrl: './sales-person-list-boostrap.component.html',
  styleUrls: ['./sales-person-list-boostrap.component.css']
})
export class SalesPersonListBoostrapComponent implements OnInit {

  studentList : Student[] = [
    new Student ("Jeffrey","Besos","jeffrey@yahoo.com",10),
    new Student ("Sam","Walton","samwaltom@yahoo.com",1045),
    new Student ("Barrack","Obama","barrackobama@yahoo.com",10456),
    new Student ("Donal","Trum","donaltrump@yahoo.com",10345),
    new Student ("Steve","Cornackys","stevecorka@yahoo.com",109770)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

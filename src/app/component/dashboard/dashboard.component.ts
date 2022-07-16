import { Component, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface Food {
  Numberofloans: string;
  
  Amount: string;
  Day: string;
  Index: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource: Food[] = [
    {Day: 'April 9 2021', Numberofloans: '0 applicant',   Amount: '#0.00',  Index: '-100%'},
    {Day: 'April 8 2021', Numberofloans: '119 applicant', Amount: '#19,634,000.00', Index: '-24.86%'},
    {Day: 'April 7 2021', Numberofloans: '152 applicant', Amount: '#26,130,000.00', Index: '54.28%'},
    {Day: 'April 7 2021', Numberofloans: '152 applicant', Amount: '#26,130,000.00', Index: '54.28%'},
   
 ];
 displayedColumns: string[] = ['Day', 'Numberofloans', 'Amount', 'Index'];


  constructor() { }

  ngOnInit(): void {
  }

}

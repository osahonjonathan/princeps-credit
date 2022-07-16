import { Component, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface Food {
  Email: string;
  ippisNo: number;
  phoneNumber: string;
  name: string;
  Amount: string;
  Tenor: string;
  Date: string;
  Mode: string;
  mdaName: string;
  button: string
}

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  dataSource: Food[] = [
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
    {  button: "View", name: 'Celestine Ojiaku', Email: 'okenufrancisco@gmail.com',  phoneNumber: '08066075282',  ippisNo: 490535, Amount: 'N300,000', Tenor: 'Unfinalized', Date: '21/04/21', Mode: 'Web', mdaName: 'National Board for Arabic and Islamic Studies'},
  ];
 displayedColumns: string[] = ['button','name', 'Email', ' phoneNumber', '  ippisNo', 'Amount', 'Tenor', 'Date', 'Mode', 'mdaName' ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewdetails(){
    this.router.navigate(['/loan-details'])

  }

  

}

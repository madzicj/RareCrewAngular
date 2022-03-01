import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeesList:any=[];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.service.getEmployees().subscribe(data=>{
      this.EmployeesList = data;
    });
  }
}

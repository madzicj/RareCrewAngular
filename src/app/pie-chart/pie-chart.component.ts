import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers:[SharedService]
})
export class PieChartComponent implements OnInit {

  constructor(private service:SharedService) {
    this.dataVal();
   }

  data: any;
  employees: any[] = [];
  valueData: number[] = [];
  labelData: any[] = [];

  dataVal(){
    this.service.getEmployees().subscribe(emp => {
      this.employees = emp;
      let i = 0;
      for(i = 0; i < this.employees.length; i++){
        this.labelData.push(this.employees[i].lastName);
        this.valueData.push(this.employees[i].workHours);
      }
      this.data = {
        labels: this.labelData,
        datasets: [{
          data: this.valueData,
          backgroundColor: [
            "#00FFFF",
            "#000000",
            "#BBB333",
            "#F39C12",
            "#73C6B6",
            "#A569BD",
            "#A9CCE3"
          ]
        }]
      }
    });

  }



  ngOnInit() {
    console.log(this.labelData);
    console.log(this.valueData);
  }
}

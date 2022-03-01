import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [{path:'employee',component:EmployeeComponent},{path:'chart',component:PieChartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

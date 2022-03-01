import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private service:SharedService) {}
  title = 'angulararecrew';

}


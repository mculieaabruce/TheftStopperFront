import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-reporte01',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporte01.component.html',
  styleUrl: './reporte01.component.css'
})
export class Reporte01Component implements OnInit {

  barchartOptions:ChartOptions = {
    responsive:true
  };
  barchartlabels:string[]=[];
  barChartLabels: string[] = [];

  //barChartType: ChartType = 'pie';

  //barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

  //barChartType: ChartType = 'bar';

  //barChartType: ChartType = 'polarArea';
  barChartType: ChartType = 'radar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  ngOnInit(): void {
      

  }

}

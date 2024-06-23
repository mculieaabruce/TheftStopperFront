import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CiudadanoService } from '../../../../Services/ciudadano.service';
import { CasoService } from '../../../../Services/caso.service';

@Component({
  selector: 'app-reporte02',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporte02.component.html',
  styleUrl: './reporte02.component.css'
})
export class Reporte02Component implements OnInit{
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
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private cS:CasoService){}
  ngOnInit(): void {
    this.cS.getsolvedcases().subscribe((data)=>{
      this.barchartlabels = data.map((items)=> items.distrito);
      this.barChartData = [{
        data: data.map((item) => item.numero_de_casos),
        label: 'Cantidad de casos resueltos por distrito',
          backgroundColor: [
            '#0094d3',

            '#4169c7',

            '#0000CD',

            '#9BBB59',

            '#8064A2',

            '#4BACC6',

            '#4F81BC',

            '#C0504D',
          ],
          borderColor:'rgba(173,216,230,1)',
          borderWidth:1
      },
    ];
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { CasoService } from '../../../../Services/caso.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reporte03',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporte03.component.html',
  styleUrl: './reporte03.component.css'
})
export class Reporte03Component implements OnInit {
  barCharOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];

  barChartType: ChartType = 'pie';

  //barChartType: ChartType = 'doughnut';

  //barChartType: ChartType = 'line';

  //barChartType: ChartType = 'bar';

  //barChartType: ChartType = 'polarArea';
  barChartLegend = true; //muestra la leyenda
  barChartData: ChartDataset[] = [];
  constructor(private mS: CasoService) {}
  ngOnInit(): void {
    this.mS.getCizbycase().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombre_ciudadano);
      this.barChartData = [
        {
          data: data.map((item) => item.cantidad_de_casos),
          label: 'Cantidad de casos',
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
          borderColor: 'rgba(173, 216, 230, 1)',
          borderWidth: 1,
        },
      ];
    });
  }
}

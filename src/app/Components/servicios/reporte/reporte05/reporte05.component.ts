import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CasoService } from '../../../../Services/caso.service';

@Component({
  selector: 'app-reporte05',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporte05.component.html',
  styleUrl: './reporte05.component.css',
})
export class Reporte05Component implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  //barChartType: ChartType = 'pie';
  barChartType: ChartType = 'doughnut';
  //barChartType: ChartType = 'line';
  //barChartType: ChartType = 'bar';
  //barChartType: ChartType = 'polarArea';

  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private cS: CasoService) {}
  ngOnInit(): void {
    this.cS.getCasosxDistrito().subscribe((data)=>{
      this.barChartLabels =data.map((item)=>item.distrito)
      this.barChartData = [
        {
          data: data.map((item) => item.numero_de_casos),
          label: 'Numero de casos',
          backgroundColor: [
            '#0094d3',
            '#4169c7',
            
          ],
          borderColor: 'rgba(173, 216, 230, 1)',
          borderWidth: 1,
        }
      ]

    })
  }
}

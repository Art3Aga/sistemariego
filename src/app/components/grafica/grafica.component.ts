import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [

    { data: [61, 59, 80, 65, 45, 55, 40, 56, 76, 65, 77, 60], label: 'Apple' },

  ];



  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



  public lineChartOptions = {

    responsive: true,

  };



  public lineChartLegend = true;

  public lineChartType = 'line';

  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}

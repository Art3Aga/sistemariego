import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AspersorModel } from 'src/app/models/aspersor_model';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  @Input() dataAspersor!: AspersorModel[];
  humedad: number[] = [];
  temperatura: number[] = [];

  public lineChartData: ChartDataSets[] = [];



  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartLabels: Label[] = [];



  public lineChartOptions: ChartOptions = {

    responsive: true,

  };



  public lineChartLegend = true;

  public lineChartType = 'line';

  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    this.humedad = this.dataAspersor.map(data => data.humedad);
    this.temperatura = this.dataAspersor.map(data => data.temperatura);
    this.lineChartData = [ { data: this.humedad, label: 'Humedad' }, { data: this.temperatura, label: 'Temperatura' },  ]
    this.lineChartLabels = this.dataAspersor.map(data => data.date);
  }

}

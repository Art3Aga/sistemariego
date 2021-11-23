import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AspersorModel } from 'src/app/models/aspersor_model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['no', 'humedad', 'temperatura', 'date', 'estado', 'automatico'];
  dataSource!: MatTableDataSource<AspersorModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @Input() dataAspersor!: AspersorModel[];

  constructor() {
    
    //this.dataSource = new MatTableDataSource(this.dataAspersor);
    /* [
      { fecha: '1/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '2/21/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '3/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '4/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '5/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '6/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '7/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '8/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '9/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
    ] */
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataAspersor);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    const search = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

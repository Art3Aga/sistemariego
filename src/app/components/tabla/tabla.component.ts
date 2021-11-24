import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AspersorModel } from 'src/app/models/aspersor_model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns: string[] = ['no', 'humedad', 'temperatura', 'date', 'estado', 'automatico'];
  dataSource!: MatTableDataSource<AspersorModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @Input() dataAspersor!: AspersorModel[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.setData();
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
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

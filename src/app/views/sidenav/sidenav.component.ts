import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  title: string = 'Sistema de Riego';

  constructor() { }

  ngOnInit(): void {
  }

  getTitulo(title: string, sidenav: MatSidenav) {
    this.title = title;
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aspersor1Component } from './views/aspersor1/aspersor1.component';
import { Aspersor2Component } from './views/aspersor2/aspersor2.component';

const routes: Routes = [
  { path: 'aspersor1', component: Aspersor1Component },
  { path: 'aspersor2', component: Aspersor2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

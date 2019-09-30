import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGComponent } from './page-g.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path:'', redirectTo:'page-g', pathMatch:'full'},
  {path:'page-g', component:PageGComponent}
]

@NgModule({
  declarations: [
    PageGComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PageGComponent
  ]
})
export class PageGModule { }

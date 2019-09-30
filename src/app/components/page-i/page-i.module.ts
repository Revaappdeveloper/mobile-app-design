import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIComponent } from './page-i.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'page-i', pathMatch:'full'},
  {path:'page-i', component:PageIComponent}
]

@NgModule({
  declarations: [
    PageIComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageIComponent
  ]
})
export class PageIModule { }

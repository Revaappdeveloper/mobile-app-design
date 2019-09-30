import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHComponent } from './page-h.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'page-h', pathMatch:'full'},
  {path:'page-h', component:PageHComponent}
]


@NgModule({
  declarations: [
    PageHComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageHComponent
  ]
})
export class PageHModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'page-a', pathMatch:'full'},
  {path:'page-a', component: PageAComponent}
]

@NgModule({
  declarations: [
    PageAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageAComponent
  ]
})
export class PageAModule { }

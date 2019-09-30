import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFComponent } from './page-f.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'', redirectTo:'page-f', pathMatch:'full'},
  {path:'page-f', component:PageFComponent}

]

@NgModule({
  declarations: [
    PageFComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageFComponent
  ]
})
export class PageFModule { }

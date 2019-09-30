import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEComponent } from './page-e.component';
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [
  {path:'', redirectTo:'page-e', pathMatch:'full'},
  {path:'page-e', component:PageEComponent}
]

@NgModule({
  declarations: [
    PageEComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    PageEComponent
  ]
  
})
export class PageEModule { }

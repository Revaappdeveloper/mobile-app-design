import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDComponent } from './page-d.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'page-d', pathMatch:'full'},
  {path:'page-d', component:PageDComponent}

]

@NgModule({
  declarations: [
    PageDComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageDComponent
  ]
})
export class PageDModule { }

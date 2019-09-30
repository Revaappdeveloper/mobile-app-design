import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCComponent } from './page-c.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'page-c', pathMatch:'full'},
  {path:'page-c', component:PageCComponent}

]

@NgModule({
  declarations: [
    PageCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PageCComponent
  ]

})
export class PageCModule { }

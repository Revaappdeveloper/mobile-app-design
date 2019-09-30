import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b.component';
import{Routes, RouterModule} from '@angular/router'

const routes: Routes =[
  {path:'', redirectTo:'page-b', pathMatch:'full'},
  {path:'page-b', component: PageBComponent}

]; 

@NgModule({
  declarations: [
    PageBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageBComponent
  ]
})
export class PageBModule { }

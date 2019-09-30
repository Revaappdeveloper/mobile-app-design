import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes  = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'page-a', loadChildren:'./components/page-a/page-a.module#PageAModule'},
  {path:'page-b', loadChildren: './components/page-b/page-b.module#PageBModule'},
  {path:'page-c', loadChildren:'./components/page-c/page-c.module#PageCModule'},
  {path:'page-d', loadChildren:'./components/page-d/page-d.module#PageDModule'},
  {path:'page-e', loadChildren:'./components/page-e/page-e.module#PageEModule'},
  {path:'page-f', loadChildren:'./components/page-f/page-f.module#PageFModule'},
  {path:'page-g', loadChildren:'./components/page-g/page-g.module#PageGModule'},
  {path:'page-h', loadChildren:'./components/page-h/page-h.module#PageHModule'},
  {path:'page-i', loadChildren:'./components/page-i/page-i.module#PageIModule'}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

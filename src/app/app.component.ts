import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  key = null;

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    
    if(this.key === 'ArrowLeft'){
      console.log(this);
      this.movePrev();
    } else if(this.key === 'ArrowRight'){
      this.moveNext();
    } else{
      console.log(this.key);
    }
  }

  title = 'ang-project8';

previousPage='';
currentPage='login';

pageList=[
  'login',
  'page-a',
  'page-b',
  'page-c',
  'page-d',
  'page-e',
  'page-f',
  'page-g',
  'page-h',
  'page-i'
]

  constructor(private router: Router){

  }
  movePrev(){
    console.log("prev");
    if(this.pageList.indexOf(this.currentPage) !==0){
     var previousPageIndex = this.pageList.indexOf(this.currentPage) - 1;
     var pageName = this.pageList[Number(previousPageIndex)];
    this.currentPage = pageName;
    this.router.navigateByUrl('/'+pageName);
    }else{
      alert("You are in the first page");
    }


  }
  moveNext(){
    console.log("next");
    if(this.pageList.indexOf(this.currentPage) !== this.pageList.length - 1){
      var previousPageIndex = this.pageList.indexOf(this.currentPage) + 1;
      var pageName = this.pageList[Number(previousPageIndex)];
     this.currentPage = pageName;
     this.router.navigateByUrl('/'+pageName);
     }else{
       alert("You are in the last page");
     }
 
  }
}

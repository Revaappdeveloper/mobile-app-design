import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials= {
    username: "Revathy",
    password: "1234"
  }

  constructor(private httpClient:HttpClient) {
    console.log('This is constructor');
  }

  ngOnInit() {
    console.log('This is ngOnInIt');
  }

saveData(){
  console.log(this.credentials);
  let httpRequest = this.httpClient.get('https://api.myjson.com/bins/vup9n');
  console.log(this);
  httpRequest.subscribe((result) => {
    console.log(result);
  }, (err: any) => {
    console.error(err);
  });

  let httpRequest2 = this.httpClient.put('https://api.myjson.com/bins/vup9n', this.credentials);
  httpRequest2.subscribe((result) => {
    console.log(result);
  }, (err: any) => {
    console.error(err);
  });

 }
 saveNewData() {
  let httpRequest = this.httpClient.post('https://api.myjson.com/bins', this.credentials);
  httpRequest.subscribe((result) => {
    console.log(result);
  }, (err) => {
    console.error(err);
  });
}  


}

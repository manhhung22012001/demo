import { Component, OnInit } from '@angular/core';
declare var a: any ;
  
// Khai báo hàm JavaScript từ tệp script.js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'HCG_Frontend';

  constructor() {}

  ngOnInit() {
  a();
  }
}

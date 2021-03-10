import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-angular-js',
  templateUrl: './angular-js.component.html',
  styleUrls: ['./angular-js.component.css']
})
export class AngularJSComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //const myWorker = new Worker("./worker.js");
    console.log("hi")
  }

}

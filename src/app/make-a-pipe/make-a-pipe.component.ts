import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-a-pipe',
  templateUrl: './make-a-pipe.component.html',
  styleUrls: ['./make-a-pipe.component.css']
})
export class MakeAPipeComponent implements OnInit {

  hi = 'hello'
  public pipeExample = "Hello World people"
  public pipeNumberExample = 3.14159;
  public date = new Date();
  public person = {
    "firstName" : "Ori",
    "lastName"  : "Wiggy"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

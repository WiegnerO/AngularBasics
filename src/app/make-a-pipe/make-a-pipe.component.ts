import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-a-pipe',
  templateUrl: './make-a-pipe.component.html',
  styleUrls: ['./make-a-pipe.component.css']
})
export class MakeAPipeComponent implements OnInit {

  hi = 'hello'
  constructor() { }

  ngOnInit(): void {
  }

}

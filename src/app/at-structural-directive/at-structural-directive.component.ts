import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-structural-directive',
  templateUrl: './at-structural-directive.component.html',
  styleUrls: ['./at-structural-directive.component.css']
})
export class AtStructuralDirectiveComponent implements OnInit {

  displayNameTrue = true;
  displayNameFalse = false;
  color = 'green';
  colors = [
    'green',
    'blue',
    'red'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

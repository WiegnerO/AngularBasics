import { Component, Input, OnInit } from '@angular/core';
import { AtFavDirectiveDirective } from './at-fav-directive.directive'


@Component({
  selector: 'app-at-attribute-directive',
  templateUrl: './at-attribute-directive.component.html',
  styleUrls: ['./at-attribute-directive.component.css'],
  
})
export class AtAttributeDirectiveComponent implements OnInit {

  public hasError = true;
  public hasNoError = false;
  color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = "";
  }

}

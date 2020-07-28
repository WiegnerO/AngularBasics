import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-navbar',
  templateUrl: './at-navbar.component.html',
  styleUrls: ['./at-navbar.component.css']
})
export class AtNavbarComponent implements OnInit {

  navBarHeaders : string[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.navBarHeaders.push('architecture');
    this.navBarHeaders.push('interpolation');
  }

}

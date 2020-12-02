import { Component, OnInit } from '@angular/core';
import { AuthService } from '../at-employee/at-employee-data/auth.service'

@Component({
  selector: 'at-navbar',
  templateUrl: './at-navbar.component.html',
  styleUrls: ['./at-navbar.component.css']
})
export class AtNavbarComponent implements OnInit {

  navBarHeaders : string[] = []; 

  constructor(public auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.navBarHeaders.push('architecture');
    this.navBarHeaders.push('interpolation');
    this.navBarHeaders.push('binding');
    this.navBarHeaders.push('services');
    this.navBarHeaders.push('component communication');
    this.navBarHeaders.push('routing');
    this.navBarHeaders.push('observables');
    this.navBarHeaders.push('js');
    this.navBarHeaders.push('angularJS');
    this.navBarHeaders.push('fourm');
    this.navBarHeaders.push('promises');
    this.navBarHeaders.push('npm');
    this.navBarHeaders.push('back end');
    //this.navBarHeaders.push('on push change detection');
    //https://www.youtube.com/watch?v=qklnVKgxMIY
    //https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4
    //this.navBarHeaders.push('life cycle hook');
    //this.navBarHeaders.push('circular refeance / memory leak');
    //https://angular.io/guide/lifecycle-hooks
    //this.navBarHeaders.push('reflow');
  }



}

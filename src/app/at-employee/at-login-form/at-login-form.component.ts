import { Component, OnInit } from '@angular/core';
import { AuthService } from '../at-employee-data/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-at-login-form',
  templateUrl: './at-login-form.component.html',
  styleUrls: ['./at-login-form.component.css']
})
export class AtLoginFormComponent implements OnInit {

  userName;
  password;
  mouseoverLogin;
  
  constructor( private authService:AuthService , private router:Router, public auth:AuthService) { 

  }

  ngOnInit(): void {
  }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['Lazy Loaded Module/profile']);
    console.log(formValues);
  }

}

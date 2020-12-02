import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../at-employee-data/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }
  profileForm : FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  


  ngOnInit(): void {
    this.firstName =  new FormControl( this.auth.currentUser.Fname , [Validators.required , Validators.pattern('[A-Z].*')] );
    this.lastName =  new FormControl( this.auth.currentUser.Lname , Validators.required );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['Lazy Loaded Module']);
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName , formValues.lastName);
      this.router.navigate(['Lazy Loaded Module']);
    }
  }

  validateLastName() : boolean{
    return this.lastName.valid || this.lastName.touched;
  }

  validateFirstName() : boolean{
    return this.firstName.valid || this.firstName.touched;
  }



}

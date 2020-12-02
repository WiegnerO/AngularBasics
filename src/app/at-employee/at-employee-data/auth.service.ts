import { Injectable } from '@angular/core';
import { IUser } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser:IUser;

  loginUser(userName: string, password: string){
    this.currentUser = {
      id : 1,
      UserName : userName,
      Fname : "Geg",
      Lname : "Hannagin"
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName : string , lastName : string){
    this.currentUser.Fname = firstName;
    this.currentUser.Lname = lastName;
  }

}

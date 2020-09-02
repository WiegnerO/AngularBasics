import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { AtEmployeeService } from '../at-services/at-employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteActivatorService implements CanActivate{

  constructor(private AES: AtEmployeeService, private router:Router ) { }

  canActivate(route:ActivatedRouteSnapshot){
   const eventExist =  !!this.AES.getEmployee(+route.params['Eid']);

   if(!eventExist)
    this.router.navigate(['/404']);
  
    return eventExist;
  }

}

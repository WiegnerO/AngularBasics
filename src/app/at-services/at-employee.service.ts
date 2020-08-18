import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtEmployeeService {

  constructor() { }

  getEmployees() {
    return  Employees;
  }

  getEmployee(id:number){
    return Employees.filter(obj => { return obj.id === id})
  }
}

const Employees = [
      {"id" : 1, "name" : "Joe", "age" : 30, "wage" : 12},
      {"id" : 2, "name" : "Bob", "age" : 54, "wage" : 13},
      {"id" : 3, "name" : "Ann", "age" : 34, "wage" : 14},
      {"id" : 4, "name" : "Geg", "age" : 24, "wage" : 15},
      {"id" : 5, "name" : "Tom", "age" : 80, "wage" : 16},
    ];

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtEmployeeService {

  constructor() { }

  getEmployees() {
    return  Employees;
  }
}

const Employees = [
      {"id" : 1, "name" : "Joe", "age" : 30},
      {"id" : 2, "name" : "Bob", "age" : 54},
      {"id" : 3, "name" : "Ann", "age" : 34},
      {"id" : 4, "name" : "Geg", "age" : 24},
      {"id" : 5, "name" : "Tom", "age" : 80},
    ];

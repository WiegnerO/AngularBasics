import { Injectable } from '@angular/core';
import { IEmployee } from './employee.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() : Observable<IEmployee[]> {
    let subject = new Subject<IEmployee[]>()
    setTimeout(() => { 
                      subject.next(EMPLOYEES);
                      subject.complete();
                      }, 100)
    return subject
  }

  getEmployee(id:number) : IEmployee {
    return EMPLOYEES.find(employee => employee.id === id)
  }

  saveEmployee(employee){
    employee.id = 66;
    employee.name = "gilber";
    employee.age = 59;
    employee.wage = 100;
    employee.shifts = [];
    EMPLOYEES.push(employee);
  }

}

const EMPLOYEES : IEmployee[] = [ 
    {
      id : 1, 
      name : "Ann", 
      age : 30, 
      wage : 12,
      location : {
        adress : "123 fake st",
        city : "Toronto",
        country : "Canada"
      },
      shifts : [{
        id : 1,
        length : 1,
        position : "boss"
      } ,
      {
        id : 1.5,
        length : 1.5,
        position : "boss"
      },
      {
        id : 1.75,
        length : 1.75,
        position : "boss"
      }]
    },
    {
      id : 2, 
      name : "Bob", 
      age : 54, 
      wage : 13,
      location : {
        adress : "69420 gibble st",
        city : "Salt Lake City",
        country : "USA"
      },
      shifts : [{
        id : 2,
        length : 2,
        position : "host"
      }]
    },
    {
      id : 3, 
      name : "Carl", 
      age : 69, 
      wage : 15,
      shifts : [{
        id : 3,
        length : 3,
        position : "chef"
      }]
    },
    {
      id : 4, 
      name : "Dil", 
      age : 7, 
      wage : 5,
      shifts : [{
        id : 4,
        length : 4,
        position : "Bust boy"
      }]
    },
    {
      id : 5, 
      name : "Ed", 
      age : 54, 
      wage : 6,
      shifts : [{
        id : 5,
        length : 5,
        position : "server"
      }]
    }
]

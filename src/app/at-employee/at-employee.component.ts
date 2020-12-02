import { Component, OnInit, Input } from '@angular/core';
import { IEmployee, EmployeeService } from './at-employee-data/index'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-at-employee',
  templateUrl: './at-employee.component.html',
  styleUrls: ['./at-employee.component.css']
})
export class AtEmployeeComponent implements OnInit {

  employees : IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { AtEmployeeService } from '../at-employee.service';

@Component({
  selector: 'app-at-employee-list',
  templateUrl: './at-employee-list.component.html',
  styleUrls: ['./at-employee-list.component.css']
})
export class AtEmployeeListComponent implements OnInit {

  employees:any[]

  constructor(private employeeService: AtEmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}

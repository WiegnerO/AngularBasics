import { Component, OnInit } from '@angular/core';
import { AtEmployeeService } from '../../at-services/at-employee.service';

@Component({
  selector: 'employee-parent',
  templateUrl: './employee-parent.component.html',
  styleUrls: ['./employee-parent.component.css']
})
export class EmployeeParentComponent implements OnInit {
  employees:any[];
  id: number;


  constructor(private employeeService: AtEmployeeService) { }

  seeWageParent(data){
    this.id = data;
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}

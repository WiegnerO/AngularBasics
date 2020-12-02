import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../at-employee-data/employee.service'

@Component({
  selector: 'app-at-employee-forum',
  templateUrl: './at-employee-forum.component.html',
  styleUrls: ['./at-employee-forum.component.css']
})
export class AtEmployeeForumComponent implements OnInit {
  newEmployee;
  isDirty: boolean = true;

  constructor(private router: Router, private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(formValues){
    this.employeeService.saveEmployee(formValues);
    this.router.navigate(['/Lazy Loaded Module'])
  }

  cancel() {
    this.router.navigate(['/Lazy Loaded Module']);
  }

}

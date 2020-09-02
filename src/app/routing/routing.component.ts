import { Component, OnInit } from '@angular/core';
import { AtEmployeeService } from '../../app/at-services/at-employee.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  employees:any[];
  constructor(private employeeService: AtEmployeeService) { }



  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}

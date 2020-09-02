import { Component, OnInit } from '@angular/core';
import { AtEmployeeService } from '../../../app/at-services/at-employee.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee:any;
  employees:any[];
  constructor(private employeeService: AtEmployeeService, private route:ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.updateEmployee() // get employee is a method from the service which returns an emplyee object based on the id vallue Eid is the route parameter
    this.employees = this.employeeService.getEmployees();
  }

  updateEmployee(){
    this.employee = this.employeeService.getEmployee(+this.route.snapshot.params['Eid']);
  }
  
  getEmployeeBefore(){
    if(this.employee.id == 1){
      this.router.navigate(['/routing/' , this.employees.length]);
    }
    else{
      this.router.navigate(['/routing/' , ((this.employee.id-1)%this.employees.length)]);
    }
    setTimeout(()=>{
      this.updateEmployee();
    },200)
  }

  getEmployeeName(): number{
    return (this.employee.id-1)%this.employees.length;
  }

  getEmployeeAfter(){
      this.router.navigate(['/routing/' , (((this.employee.id)%this.employees.length))+1]);
      setTimeout(()=>{
        this.updateEmployee();
      },200)
  }

}

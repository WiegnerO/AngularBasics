import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnInit {
  @Input() employeeInfo:any;
  @Output() eventClick = new EventEmitter();
  @Input() buttonFlag:boolean;

  seeWageChild(){
    if(this.buttonFlag){
      this.eventClick.emit("undefined");
    }
    else{
      this.eventClick.emit(this.employeeInfo.id);
    }
  }

  incAge(){
    this.employeeInfo.age ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

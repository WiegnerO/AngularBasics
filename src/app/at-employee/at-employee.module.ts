import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtEmployeeRoutingModule } from './at-employee-routing.module';
import { AtEmployeeComponent } from './at-employee.component';


@NgModule({
  declarations: [AtEmployeeComponent],
  imports: [
    CommonModule,
    AtEmployeeRoutingModule
  ]
})
export class AtEmployeeModule { }

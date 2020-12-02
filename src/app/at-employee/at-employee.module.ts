import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtEmployeeRoutingModule } from './at-employee-routing.module';
import { AtEmployeeComponent } from './at-employee.component';
import { AtLoginFormComponent } from './at-login-form/at-login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AtEmployeeForumComponent } from './at-employee-forum/at-employee-forum.component';


@NgModule({
  declarations: [AtEmployeeComponent, AtLoginFormComponent, ProfileComponent, AtEmployeeForumComponent],
  imports: [
    CommonModule,
    FormsModule,
    AtEmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class AtEmployeeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AtNavbarComponent } from './at-navbar/at-navbar.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { AtAppModuleComponent } from './at-app-module/at-app-module.component';
import { MakeAPipeComponent } from './make-a-pipe/make-a-pipe.component';
import { TextFormaterPipe } from './make-a-pipe/text-formater.pipe';
import { RoutingComponent } from './routing/routing.component';
import { BindingComponent } from './binding/binding.component';
import { AtServicesComponent } from './at-services/at-services.component';
import { AtEmployeeService } from './at-services/at-employee.service';
import { AtEmployeeListComponent } from './at-services/at-employee-list/at-employee-list.component';
import { AtStructuralDirectiveComponent } from './at-structural-directive/at-structural-directive.component';
import { EmployeeDetailComponent } from './routing/employee-detail/employee-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmployeeRouteActivatorService } from './routing/employee-route-activator.service'
import {
  AtComponentCommunicationComponent,
  EmployeeParentComponent,
  EmployeeChildComponent
}from './at-component-communication/index';
import { AtFunctionComponent } from './at-function/at-function.component'
// import { AtComponentCommunicationComponent } from './at-component-communication/at-component-communication.component';
// import { EmployeeParentComponent } from './at-component-communication/employee-parent/employee-parent.component';
// import { EmployeeChildComponent } from './at-component-communication/employee-child/employee-child.component';



@NgModule({
  declarations: [
    AppComponent,
    AtNavbarComponent,
    ArchitectureComponent,
    InterpolationComponent,
    AtAppModuleComponent,
    MakeAPipeComponent,
    TextFormaterPipe,
    RoutingComponent,
    BindingComponent,
    AtServicesComponent,
    AtEmployeeListComponent,
    AtStructuralDirectiveComponent,
    AtComponentCommunicationComponent,
    EmployeeParentComponent,
    EmployeeChildComponent,
    EmployeeDetailComponent,
    ErrorPageComponent,
    AtFunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AtEmployeeService , EmployeeRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

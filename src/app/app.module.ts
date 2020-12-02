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
import { AtFunctionComponent } from './at-function/at-function.component';
import { AtObservablesComponent } from './at-observables/at-observables.component';
import {
  AtComponentCommunicationComponent,
  EmployeeParentComponent,
  EmployeeChildComponent
}from './at-component-communication/index';
// import { AtComponentCommunicationComponent } from './at-component-communication/at-component-communication.component';
// import { EmployeeParentComponent } from './at-component-communication/employee-parent/employee-parent.component';
// import { EmployeeChildComponent } from './at-component-communication/employee-child/employee-child.component';
import { AuthService } from './at-employee/at-employee-data/auth.service';
import { NpmComponent } from './npm/npm.component';
import { AtAttributeDirectiveComponent } from './at-attribute-directive/at-attribute-directive.component';
import { AtFavDirectiveDirective } from './at-attribute-directive/at-fav-directive.directive';
import { DynamicColorDirective } from './at-attribute-directive/dynamic-color.directive';
import { SettingUpBackEndComponent } from './setting-up-back-end/setting-up-back-end.component';
import { AngularJSComponent } from './angular-js/angular-js.component';

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
    AtFunctionComponent,
    AtObservablesComponent,
    NpmComponent,
    AtAttributeDirectiveComponent,
    AtFavDirectiveDirective,
    DynamicColorDirective,
    SettingUpBackEndComponent,
    AngularJSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [AtEmployeeService , EmployeeRouteActivatorService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

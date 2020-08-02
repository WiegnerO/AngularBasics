import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component'
import { InterpolationComponent } from './interpolation/interpolation.component'
import { AtAppModuleComponent } from './at-app-module/at-app-module.component'
import {  MakeAPipeComponent } from './make-a-pipe/make-a-pipe.component'
import { RoutingComponent } from './routing/routing.component'

const routes: Routes = [
  {path : '', redirectTo : '/architecture', pathMatch : 'full'},
  {path : 'architecture' , component : ArchitectureComponent},
  {path : 'appmodule' , component : AtAppModuleComponent},
  {path : 'interpolation' , component : InterpolationComponent},
  {path : 'pipes' , component : MakeAPipeComponent},
  {path : 'routing' , component : RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

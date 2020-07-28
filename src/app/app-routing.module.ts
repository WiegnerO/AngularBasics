import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectureComponent } from './architecture/architecture.component'
import { InterpolationComponent } from './interpolation/interpolation.component'

const routes: Routes = [
  {path : '', redirectTo : '/architecture', pathMatch : 'full'},
  {path : 'architecture' , component : ArchitectureComponent},
  {path : 'interpolation' , component : InterpolationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

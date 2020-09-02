import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtEmployeeComponent } from './at-employee.component';

const routes: Routes = [{ path: '', component: AtEmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtEmployeeRoutingModule { }

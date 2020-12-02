import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtLoginFormComponent } from './at-login-form/at-login-form.component';
import { AtEmployeeComponent } from './at-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { AtEmployeeForumComponent } from './at-employee-forum/at-employee-forum.component';

const routes: Routes = [
                        { path: '', component: AtEmployeeComponent },
                        { path: 'loggin', component: AtLoginFormComponent},
                        { path: 'profile', component: ProfileComponent},
                        { path: 'employee forum', component: AtEmployeeForumComponent}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtEmployeeRoutingModule { }

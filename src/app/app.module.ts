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
import { TextFormaterPipe } from './text-formater.pipe';
import { RoutingComponent } from './routing/routing.component';
import { BindingComponent } from './binding/binding.component';

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
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

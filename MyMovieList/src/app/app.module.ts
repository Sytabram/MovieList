import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login-module/login.module';
import {PortalModule} from "./portal-module/portal.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PortalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

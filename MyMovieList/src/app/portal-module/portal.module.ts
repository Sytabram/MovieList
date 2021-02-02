import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './component/portal/portal/portal.component';
import { MenuComponent } from './component/portal/menu/menu.component';
import {BrowserModule} from "@angular/platform-browser";
import {PortalRoutingModule} from "./portal-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PortalComponent, MenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PortalRoutingModule,
    FormsModule
  ]
})
export class PortalModule { }

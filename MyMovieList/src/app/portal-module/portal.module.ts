import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './component/portal/portal.component';
import { MenuComponent } from './component/menu/menu.component';
import {BrowserModule} from "@angular/platform-browser";
import {PortalRoutingModule} from "./portal-routing.module";
import {FormsModule} from "@angular/forms";
import { MoviesComponent } from './component/movies/movies.component';
import { StudiosComponent } from './component/studios/studios.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { DashboardMoviesComponent } from './component/dashboard-movies/dashboard-movies.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [PortalComponent, MenuComponent, MoviesComponent, StudiosComponent, CategoriesComponent, DashboardMoviesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PortalRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,

  ]
})
export class PortalModule { }

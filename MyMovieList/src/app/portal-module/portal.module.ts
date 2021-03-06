import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './component/portal/portal.component';
import {BrowserModule} from "@angular/platform-browser";
import {PortalRoutingModule} from "./portal-routing.module";
import {FormsModule} from "@angular/forms";
import { MoviesComponent } from './component/movies/movies.component';
import { DashboardMoviesComponent } from './component/dashboard-movies/dashboard-movies.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";
import { NewMovieComponent } from './component/new-movie/new-movie.component';
import {MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DialogMovieComponent } from './component/dialog-movie/dialog-movie.component';
import { AboutComponent } from './component/about/about.component';





@NgModule({
  declarations: [
    PortalComponent,
    MoviesComponent,
    DashboardMoviesComponent,
    NewMovieComponent,
    DialogMovieComponent,
    AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PortalRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,

  ]
})
export class PortalModule { }

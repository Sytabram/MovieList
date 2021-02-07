
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {PortalComponent} from "./component/portal/portal.component";
import {DashboardMoviesComponent} from "./component/dashboard-movies/dashboard-movies.component";
import {AboutComponent} from "./component/about/about.component";




const routes: Routes = [
  {
    path: 'portal',
    canActivate: [AuthGuard],
    component: PortalComponent,
    children: [
        { path: '', component: DashboardMoviesComponent },
        { path: 'about', component: AboutComponent },
        { path: 'movies', component: DashboardMoviesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

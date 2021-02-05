
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {PortalComponent} from "./component/portal/portal.component";
import {MoviesComponent} from "./component/movies/movies.component";
import {StudiosComponent} from "./component/studios/studios.component";
import {CategoriesComponent} from "./component/categories/categories.component";
import {DashboardMoviesComponent} from "./component/dashboard-movies/dashboard-movies.component";



const routes: Routes = [
  {
    path: 'portal',
    canActivate: [AuthGuard],
    component: PortalComponent,
    children: [
        { path: '', component: DashboardMoviesComponent },
        { path: 'studios', component: StudiosComponent },
        { path: 'categories', component: CategoriesComponent },
        { path: 'movies', component: DashboardMoviesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

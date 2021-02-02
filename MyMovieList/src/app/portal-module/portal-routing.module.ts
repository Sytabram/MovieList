
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {PortalComponent} from "./component/portal/portal/portal.component";



const routes: Routes = [
  {
    path: 'portal',
    canActivate: [AuthGuard],
    component: PortalComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

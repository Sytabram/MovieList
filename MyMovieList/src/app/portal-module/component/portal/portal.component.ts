import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../login-module/service/auth.service";
import {Login} from "../../../login-module/model/login";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  login!: Login;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.login = this.authService.loginModel;
  }
  onLogout(): void
  {
    this.authService.logout();
  }
}



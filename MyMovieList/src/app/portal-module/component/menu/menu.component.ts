import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../login-module/service/auth.service";
import {Login} from "../../../login-module/model/login";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  login: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void
  {
    this.login = this.authService.loginModel;
  }

  onLogout(): void
  {
    this.authService.logout();
  }
}

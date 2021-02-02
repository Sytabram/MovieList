import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {Login} from "../../model/login";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login = { username: "user", password: "epsic" } as Login;
  isWrongCredentials = false;

  constructor(private router: Router, private authService: AuthService) {

    this.authService.isAuthenticated = false;
  }

  ngOnInit(): void
  {
  }

  onLogin(): void
  {
    this.authService.login(this.login);
    if (this.authService.isAuthenticated)
    {
      this.router.navigate(['portal']);
    } else
    {
      this.isWrongCredentials = true;
    }
  }

}

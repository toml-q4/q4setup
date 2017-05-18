import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  login() {
    this.message = "Logging in...";

    this.authService.login()
    .subscribe(() => {
      if (this.authService.isAuthenticated) {
        this.message = "Logged in";

        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        this.router.navigate([redirectUrl]);
      }
      else {
        this.message = "Logged out";
      }
    });
  }
  logout() {
    this.authService.logout();
    this.message = "Logged out";
  }
}

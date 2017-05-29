import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormModel } from './login-form.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent {
  model: LoginFormModel = new LoginFormModel();

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.model.username, this.model.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        this.router.navigate([redirectUrl]);
      }
      else {
        alert('failed to log in');
      }
    }, (errorMessage: string) => {
      alert(errorMessage);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from './login-form.model';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {

  model: LoginFormModel = new LoginFormModel();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model.username, this.model.password);
  }
}

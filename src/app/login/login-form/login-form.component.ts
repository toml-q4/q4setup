import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {

  model: LoginFormModel = new LoginFormModel();

  constructor() { }

  ngOnInit() {
  }
  login() {
    alert('submit clicked');
  }
}

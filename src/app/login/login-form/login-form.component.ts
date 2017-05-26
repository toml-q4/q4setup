import { Component, OnInit } from '@angular/core';


export class LoginUser {
  constructor(
    public username: string,
    public password: string
  ){}
}


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
  loginUser: LoginUser;

  constructor() { }

  ngOnInit() {
  }

}

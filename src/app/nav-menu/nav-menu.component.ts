import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isAuthenticated = false;
  constructor(public authService: AuthService, private router: Router) { 
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}

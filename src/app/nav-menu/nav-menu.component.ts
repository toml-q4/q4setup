import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isAuthenticated = false;
  loginStatusSubscription: Subscription;
  
  constructor(public authService: AuthService, private router: Router) {
    this.loginStatusSubscription = this.authService.loginStream$.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.loginStatusSubscription.unsubscribe();
  }
}

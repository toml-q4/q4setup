import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class UserService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.userLoggedIn) return true;

    this.router.navigate(['/admin/login']);
    return false;
  }
  userLoggedIn: boolean = false;
  constructor(private router: Router) { }

}

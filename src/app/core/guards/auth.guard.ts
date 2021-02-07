import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canAuth();
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canAuth();
  }

  private canAuth(): Promise<boolean> | boolean {
    if (this.userService.user) {
      return true;
    }
    return this.router.navigate(['login']);
  }
}

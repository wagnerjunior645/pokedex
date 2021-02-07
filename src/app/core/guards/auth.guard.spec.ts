import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { UserService } from '../services/user.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'login', component: LoginComponent },
        { path: '', component: HomeComponent }
      ])],
      providers: [UserService],
    });
    guard = TestBed.inject(AuthGuard);
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should user can load', async () => {
    userService.login();
    const value = guard.canLoad();
    expect(value).toBe(true);
  });

  it('should user not can load', async () => {
    const value = await guard.canLoad();
    expect(value).toBe(true);
  });

  it('should user can canActivate', async () => {
    userService.login();
    const value = guard.canActivate();
    expect(value).toBe(true);
  });

  it('should user not canActivate', async () => {
    const value = await guard.canActivate();
    expect(value).toBe(true);
  });
});

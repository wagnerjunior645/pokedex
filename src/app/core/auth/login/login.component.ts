import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../http/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('admin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('admin', [Validators.required]),
    });
  }

  login(): void {
    const { email, password } = this.loginForm.value;
    this.authService
      .login(email, password)
      .pipe(take(1))
      .subscribe((response) => {
        if (response.success) {
          this.message = response.message;
          this.userService.login();
          this.router.navigate(['']);
        }
      });
  }
}

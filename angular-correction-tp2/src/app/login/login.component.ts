import { UserService } from './../shared/services/user/user.service';
import { Component, OnInit, Output, EventEmitter, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean;

  constructor(private fb: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.loading = false;

    let log = '';
    let pass = '';

    if (isDevMode()) {
      log = 'admin';
      pass = 'password';
    }

    this.loginForm = this.fb.group({
      login: [log, Validators.required],
      password: [pass, Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;

    this.user.login(this.loginForm.value).then((res) => {
      this.loading = false;
    });
  }
}

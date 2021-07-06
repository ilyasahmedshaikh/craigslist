import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  programForm: any = FormGroup;
  loginStatus: boolean = false;
  Users: any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private checkLogin: CheckLoginService,
    private config: ConfigService,
    private apiCallService: ApiService,
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.ifLogin();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    });
  }

  login() {
    const email = this.programForm.value.email;
    const password = this.programForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {

      this.apiCallService.getWithQuery(this.config.collections.users, 'email', '==', email).subscribe(user => {
        this.checkLogin.setLoginData(user[0]);
      })

      this.checkLogin.setLoginStatus(true);
      this.router.navigateByUrl('/homepage');
    })
    .catch(err => {
      alert(err.message);
      console.log('Something went wrong: ', err.message);
    });
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (this.loginStatus) {
        this.router.navigateByUrl('/auth/profile');
      }
    })
  }

}

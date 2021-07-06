import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  programForm: any = FormGroup;
  userData: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginSrv: CheckLoginService,
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getData();
  }

  formInit() {
    this.programForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  getData() {
    this.userData = this.loginSrv.getUserData();

    this.programForm.patchValue({
      firstname: this.userData.firstname,
      lastname: this.userData.lastname,
      email: this.userData.email,
    })
  }

  logout() {
    this.loginSrv.logout();
    this.router.navigateByUrl('/homepage');
  }

}

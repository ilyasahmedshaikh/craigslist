import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private config: ConfigService,
    private apiCallService: ApiService
  ) { }

  ngOnInit(): void {
    this.formInit();
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

  signup() {
    // making authentic account for detailer in Database
    this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
      .then(value => {
        // adding detailer to firestore for user_type and other profile biodata
        let data = {
          firstname: this.programForm.value.firstname,
          lastname: this.programForm.value.lastname,
          email: this.programForm.value.email,
          user_type: 'user'
        };

        let request = this.apiCallService.post(this.config.collections.users, data);
        request.then(() => {
          this.router.navigateByUrl("/auth/login");
        })
        .catch((error) => {
          alert(error);
        });
      })
      .catch(err => {
        alert(err.message);
        console.log('Something went wrong: ', err.message);
      });
  }

}

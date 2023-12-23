import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ["", [Validators.minLength(3), Validators.required]],
      lastName: ["", [Validators.minLength(3), Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(3), Validators.required]],
      cPassword: ["", [Validators.minLength(3), Validators.required]],
    },
      {
        validators: MustMatch("password", "cPassword")
      }
    )
  }
  signup() {
    if (!this.signUpForm.invalid) {
      // this.userService.signUp(this.signUpForm.value).subscribe(
      //   (res)=>{
      //     console.log('signup response', res);
      //     this.router.navigate(["signIn"])

      //   }
      // )
      console.log(this.signUpForm.value);
      this.signUpForm.value.roles = ["admin", "user"];
      this.userService.signUp(this.signUpForm.value).subscribe(
        (data) => {
          this.router.navigate(["signIn"])
        }
      );
    }

  }

}

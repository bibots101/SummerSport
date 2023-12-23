import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup
  user: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  constructor(private userService: UserService,private tokenStorage:TokenStorageService,
    private router:Router) { }

  ngOnInit() {
  }
  signIn() {
    // this.userService.signIn(this.user).subscribe(
    //   (res) => {
    //     console.log("sign in res ", res);
    //   }
    // )
    console.log("This is my user : ", this.user);
    this.userService.signIn(this.user).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate([""]);
      },
      (err) => {
        console.log("here error after login", err);
      }
    );
  }

}

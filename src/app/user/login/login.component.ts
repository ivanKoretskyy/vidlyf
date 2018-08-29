import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

import { flatMap, tap, catchError, switchMap, concatMap } from "rxjs/operators";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.loginService
      .loginUser(this.loginForm.value)
      .pipe(
        tap(res => {
          console.log("in tabp: " + res);
        }),
        flatMap(res => {
          return this.loginService.getMe(res);
        })
      )
      .subscribe(res => {
        this.store.dispatch({
          type: "CHANGE_CURRENT_USER",
          payload: res
        });
      });
  }
}

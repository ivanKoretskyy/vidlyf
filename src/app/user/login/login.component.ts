import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.loginService
      .loginUser(this.loginForm.value)
      .subscribe(
        res => console.log("login success"),
        err => console.error(err)
      );
  }
}

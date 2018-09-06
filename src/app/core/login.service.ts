import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { HttpHeaders } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private apiService: ApiService) {}
  loginUser(payload) {
    return this.apiService
      .post("https://vidlyapi.herokuapp.com/api/users/login", payload, {
        responseType: "text"
      })
      .pipe(tap((res: string) => localStorage.setItem("token", res)));
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  getMe(token) {
    const httpOptionis = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "x-auth-token": token
      })
    };
    return this.apiService.get(
      "https://vidlyapi.herokuapp.com/api/users/me",
      httpOptionis
    );
  }
}

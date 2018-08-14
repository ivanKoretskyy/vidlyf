import { Injectable } from "@angular/core";
import { ApiService } from "./../../core/api.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private apiService: ApiService) {}
  loginUser(payload) {
    return this.apiService.post(
      "https://vidlyapi.herokuapp.com/api/users/login",
      payload
    );
  }
}

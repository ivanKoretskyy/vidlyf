import { Injectable } from "@angular/core";
import { ApiService } from "./../../core/api.service";
import { HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private apiService: ApiService) {}
  loginUser(payload) {
    return this.apiService.post(
      "https://vidlyapi.herokuapp.com/api/users/login",
      payload,
      {responseType: 'text'}
    );
  }

  getMe(token) {
    const httpOptionis = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': token})
    }
    return this.apiService.get("https://vidlyapi.herokuapp.com/api/users/me", httpOptionis)
  }
}

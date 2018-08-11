import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiService } from "./../core/api.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getUsers() {
    return of([
      {
        id: "id1",
        firstName: "Ivan",
        lastName: "Koretskyy",
        email: "ivasuk1988@yahoo.com"
      }
    ]);
  }
  getUsers2() {
    return this.apiService.get("https://vidlyapi.herokuapp.com/api/users");
  }
}

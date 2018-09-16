import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { UserService } from "./user.service";
import { map } from "rxjs/operators";

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve() {
    return this.userService.getUsers2().pipe(map(e => e));
  }
}

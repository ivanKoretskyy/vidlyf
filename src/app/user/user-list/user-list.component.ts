import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./../user.service";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["id", "firstName", "lastName", "email"];
  dataSource;
  alive = true;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getDataSourse();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getDataSourse() {
    this.userService
      .getUsers2()
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        debugger;
        this.dataSource = res;
      });
  }
}

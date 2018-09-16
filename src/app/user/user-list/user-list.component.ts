import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./../user.service";
import { takeWhile } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["id", "firstName", "lastName", "email"];
  dataSource;
  alive = true;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getDataSourse();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getDataSourse() {
    // this.userService
    //   .getUsers2()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any) => {
    //     this.dataSource = res;
    //   });
    this.dataSource = this.route.snapshot.data["users"];
  }
}

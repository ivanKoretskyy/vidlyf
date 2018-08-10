import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ["id", "firstName", "lastName", "email"];
  dataSource = [
    {
      id: "id1",
      firstName: "Ivan",
      lastName: "Koretskyy",
      email: "ivasuk1988@yahoo.com"
    }
  ];
  constructor() {}

  ngOnInit() {}
}

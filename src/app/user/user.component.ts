import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: FormControl = new FormControl();
  constructor() {}

  ngOnInit() {
    this.name.setValue("ivan");
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vidly-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  openSideNav = true;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.openSideNav = !this.openSideNav;
  }
}

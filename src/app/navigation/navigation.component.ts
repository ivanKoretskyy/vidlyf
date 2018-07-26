import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vidly-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  showDashboard = false;
  constructor() {}

  ngOnInit() {}

  toggleProjects() {
    this.showDashboard = !this.showDashboard;
  }
}
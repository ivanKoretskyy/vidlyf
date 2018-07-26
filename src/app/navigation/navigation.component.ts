import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "vidly-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  showDashboard = false;
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  toggleProjects() {
    this.showDashboard = !this.showDashboard;
    this.store.dispatch({
      type: "TOGGLE_SIDENAV",
      payload: this.showDashboard
    });
  }
}

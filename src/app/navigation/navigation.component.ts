import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "vidly-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  showDashboard = false;
  currentUser;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("users")).subscribe(state => {
      if (state && state.currentUser) {
        debugger;
        this.currentUser = state.currentUser;
      }
    });
  }

  toggleProjects() {
    this.showDashboard = !this.showDashboard;
    this.store.dispatch({
      type: "TOGGLE_SIDENAV",
      payload: this.showDashboard
    });
  }
}

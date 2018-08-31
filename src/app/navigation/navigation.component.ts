import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { filter, takeWhile } from "rxjs/operators";
import * as fromUserState from "./../user/state/user.reducer";

@Component({
  selector: "vidly-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit, OnDestroy {
  showDashboard = false;
  currentUser;
  componentAlive = true;
  constructor(private store: Store<fromUserState.State>) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }

  setCurrentUser() {
    this.store
      .pipe(
        select("users"),
        filter(i => !!i),
        takeWhile(() => this.componentAlive)
      )
      .subscribe(state => {
        if (state && state.currentUser) {
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

import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromNavState from "./../navigation/state/navigation.reducer";

@Component({
  selector: "vidly-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  openSideNav = true;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store
      .pipe(select(fromNavState.getShowSideNav))
      .subscribe(nav => (this.openSideNav = nav));
  }

  toggle() {
    this.openSideNav = !this.openSideNav;
  }
}

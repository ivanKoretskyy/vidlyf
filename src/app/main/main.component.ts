import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

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
      .pipe(select("navigation"))
      .subscribe(nav => (this.openSideNav = nav ? nav.showSideNav : false));
  }

  toggle() {
    this.openSideNav = !this.openSideNav;
  }
}

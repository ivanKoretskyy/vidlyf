import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { GOOGLE_TOKEN } from "./google.service";

//declare let google: any;
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @ViewChild("googlemap")
  googleMapElement: any;
  map: any;
  constructor(@Inject(GOOGLE_TOKEN) private google: any) {}

  ngOnInit() {
    var mapProp = {
      center: new this.google.maps.LatLng(41.5793, 13.8143),
      zoom: 14,
      mapTypeId: this.google.maps.MapTypeId.ROADMAP
    };
    this.map = new this.google.maps.Map(
      this.googleMapElement.nativeElement,
      mapProp
    );
  }
}

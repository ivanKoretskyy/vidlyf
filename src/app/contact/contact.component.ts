import { Component, OnInit, ViewChild } from "@angular/core";

declare let google: any;
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @ViewChild("googlemap")
  googleMapElement: any;
  map: any;
  constructor() {}

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(41.5793, 13.8143),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(
      this.googleMapElement.nativeElement,
      mapProp
    );
  }
}

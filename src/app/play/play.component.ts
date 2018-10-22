import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  option = "a";
  isMagor = true;
  isDanger = true;
  selectedFile: File;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getStyle() {
    return { color: "#dd0011" };
  }

  fileSelected(fileInput) {
    this.selectedFile = <File>fileInput.target.files[0];
    // this.httpClient.console.log(file);
  }
  uploadFile() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);
    this.httpClient
      .post("https://test1-58bed.firebaseio.com/data.json", fd, {
        reportProgress: true,
        observe: "events"
      })
      .subscribe(events => console.log(events), err => console.log(err));
  }
}

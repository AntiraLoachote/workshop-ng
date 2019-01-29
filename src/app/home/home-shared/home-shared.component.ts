import { PostDataModel } from "src/models/home/PostDataModel";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-home-shared",
  templateUrl: "./home-shared.component.html",
  styleUrls: ["./home-shared.component.css"]
})
export class HomeSharedComponent implements OnInit {
  data: PostDataModel = new PostDataModel();

  constructor() {}
  @Input()
  // defaultModel: number;
  set defaultModel(value) {
    if (value) {
      this.data = value;
    }
  }

  @Output()
  save = new EventEmitter();

  ngOnInit() {
    console.log("DefaultModel", this.defaultModel);
  }
}

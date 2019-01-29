import { PostDataModel } from "./../../../models/home/PostDataModel";
import { GetService } from "./../../services/get.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"]
})
export class HomeListComponent implements OnInit {
  data: Observable<Array<PostDataModel>>;
  data2: Array<PostDataModel>;

  constructor(private getService: GetService) {}

  ngOnInit() {
    this.data = this.getService.getAllData();
    this.getService.getAllData().subscribe(res => (this.data2 = res));
    // console.log("finish init");
  }
}

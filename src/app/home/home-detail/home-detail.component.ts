import { PostDataModel } from "src/models/home/PostDataModel";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GetService } from "src/app/services/get.service";

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"]
})
export class HomeDetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private getService: GetService,
    private router: Router
  ) {}

  data: PostDataModel;

  ngOnInit() {
    this.activeRoute.params.subscribe(param =>
      this.getService.getDataById(param.id).subscribe(res => (this.data = res))
    );
  }

  handleSave(): void {
    this.getService
      .updateData(this.data.id, this.data)
      .subscribe(res => this.router.navigate(["/home/list"]));
  }
}

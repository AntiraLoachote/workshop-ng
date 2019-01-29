import { HomeRoutes } from "./home.routing";
import { HomeComponent } from "./home.component";
import { HomeSharedComponent } from "./home-shared/home-shared.component";
import { HomeListComponent } from "./home-list/home-list.component";
import { HomeDetailComponent } from "./home-detail/home-detail.component";
import { HomeCreateComponent } from "./home-create/home-create.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    HomeCreateComponent,
    HomeDetailComponent,
    HomeListComponent,
    HomeSharedComponent
  ],
  imports: [CommonModule, HomeRoutes, FormsModule],
  exports: [
    HomeCreateComponent,
    HomeDetailComponent,
    HomeListComponent,
    HomeSharedComponent
  ]
})
export class HomeModule {}

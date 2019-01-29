import { HomeSharedComponent } from "./home-shared/home-shared.component";
import { HomeListComponent } from "./home-list/home-list.component";
import { HomeDetailComponent } from "./home-detail/home-detail.component";
import { HomeCreateComponent } from "./home-create/home-create.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeCreateComponent,
    HomeDetailComponent,
    HomeListComponent,
    HomeSharedComponent
  ],
  imports: [CommonModule],
  exports: [
    HomeCreateComponent,
    HomeDetailComponent,
    HomeListComponent,
    HomeSharedComponent
  ]
})
export class HomeModule {}

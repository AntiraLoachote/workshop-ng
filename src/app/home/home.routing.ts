import { HomeComponent } from "./home.component";
import { HomeDetailComponent } from "./home-detail/home-detail.component";
import { HomeListComponent } from "./home-list/home-list.component";
import { HomeCreateComponent } from "./home-create/home-create.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: HomeListComponent },
      { path: "create", component: HomeCreateComponent },
      { path: "list", component: HomeListComponent },
      { path: "detail/:id", component: HomeDetailComponent }
    ]
  }
];

export const HomeRoutes = RouterModule.forChild(routes);

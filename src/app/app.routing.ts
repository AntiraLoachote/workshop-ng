import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);

import { AppRoutes } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

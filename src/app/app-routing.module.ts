import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BreakingComponent } from "./components/news/breaking/breaking.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";
import { EverythingComponent } from "./components/everything/everything.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "breaking-news/:country", component: BreakingComponent },
  {
    path: "breaking-news/:country/details/:id",
    component: NewsDetailsComponent
  },
  {
    path: "everything/:op/details/:id",
    component: NewsDetailsComponent
  },
  { path: "everything/:about", component: EverythingComponent },
  { path: "about", component: AboutComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

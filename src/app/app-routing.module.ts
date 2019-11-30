import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BreakingComponent } from "./components/news/breaking/breaking.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "breaking-news", component: BreakingComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

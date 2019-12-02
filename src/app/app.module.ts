import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CardComponent } from "./news/card/card.component";
import { BreakingComponent } from "./components/news/breaking/breaking.component";
import { HomeComponent } from "./components/home/home.component";
import { CountryScanPipe } from './pipes/country-scan.pipe';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { EverythingComponent } from './components/everything/everything.component';
import { AboutScanPipe } from './pipes/about-scan.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    BreakingComponent,
    HomeComponent,
    CountryScanPipe,
    NewsDetailsComponent,
    EverythingComponent,
    AboutScanPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BreakingComponent } from "./components/news/breaking/breaking.component";
import { HomeComponent } from "./components/home/home.component";
import { CountryScanPipe } from './pipes/country-scan.pipe';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { EverythingComponent } from './components/everything/everything.component';
import { AboutScanPipe } from './pipes/about-scan.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/news/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    AboutScanPipe,
    FooterComponent,
    AboutComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

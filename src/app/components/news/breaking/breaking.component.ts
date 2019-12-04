import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/news.service";
import { Article } from "../../../models/article.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-breaking",
  templateUrl: "./breaking.component.html",
  styleUrls: ["./breaking.component.css"]
})
export class BreakingComponent implements OnInit {
  articles: Article[] = [];
  country: string = "";
  loading: boolean;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.getNews("us");
  }

  getNews(countryParam?: string) {
    this.loading = true;

    if (countryParam)
      this.router.navigateByUrl(`breaking-news/${countryParam}`);

    this.country = countryParam;

    this.newsService.getTopHeadlinesByCountry(countryParam).subscribe(
      (res: Article[]) => {
        this.articles = res;
        this.loading = false;
      },
      err => console.log(err)
    );
  }

  viewDetails(event: any) {
    this.router.navigateByUrl(
      `/breaking-news/${this.country}/details/${event}`
    );
  }
}

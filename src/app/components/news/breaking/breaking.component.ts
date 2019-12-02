import { Component, OnInit, OnChanges, AfterViewInit } from "@angular/core";
import { NewsService } from "../../../services/news.service";
import { Article } from "../../../models/article.model";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-breaking",
  templateUrl: "./breaking.component.html",
  styleUrls: ["./breaking.component.css"]
})
export class BreakingComponent implements OnInit {
  articles: Article[] = [];
  country: string = "";

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.getNews("us");
  }

  getNews(countryParam?: string) {
    if (countryParam)
      this.router.navigateByUrl(`breaking-news/${countryParam}`);

    this.determineCountry(countryParam);

    this.newsService.getTopHeadlinesByCountry(countryParam).subscribe(
      (res: Article[]) => {
        this.articles = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  determineCountry(countryParam: string) {
    const us = "The United States";

    switch (countryParam) {
      case "us":
        this.country = us;
        break;
      case "ca":
        this.country = "Canada";
        break;
      case "mx":
        this.country = "Mexico";
        break;
      case "ar":
        this.country = "Argentina";
        break;
      case "ve":
        this.country = "Venezuela";
        break;
      default:
        this.country = us;
    }
  }
}

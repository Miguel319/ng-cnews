import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/models/article.model";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.css"]
})
export class NewsDetailsComponent implements OnInit {
  article: Article;

  constructor(
    private activatedRouted: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.fetchData();
    setTimeout(() => console.log(this.article), 500);
  }

  fetchData() {
    const country = this.activatedRouted.snapshot.paramMap.get("country");
    const myIndex = this.activatedRouted.snapshot.paramMap.get("id");

    console.log(country);
    console.log(myIndex);

    this.newsService
      .getTopHeadlinesByCountry(country)
      .subscribe(
        (res: Article[]) =>
          (this.article = res.filter((v, i) => i === Number(myIndex))[0])
      );
  }
}

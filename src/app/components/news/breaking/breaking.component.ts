import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../services/news.service";
import { Article } from "../../../models/article.model";

@Component({
  selector: "app-breaking",
  templateUrl: "./breaking.component.html",
  styleUrls: ["./breaking.component.css"]
})
export class BreakingComponent implements OnInit {
  news: Article[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getUSNews();
  }

  getUSNews() {
    this.newsService.getTopHeadlinesInTheUs().subscribe(
      (res: Article[]) => {
        this.news = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
}

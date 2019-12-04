import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { Article } from "../../models/article.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-everything",
  templateUrl: "./everything.component.html",
  styleUrls: ["./everything.component.css"]
})
export class EverythingComponent implements OnInit {
  articles: Article[] = [];
  about: string = "";
  loading: boolean;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.getNews("bitcoin");
  }

  getNews(aboutArg?: string) {
    this.loading = true;

    this.newsService.getEverything(aboutArg).subscribe(
      (res: Article[]) => {
        this.articles = res;
        this.loading = false;
      },
      err => console.log(err)
    );

    this.about = aboutArg ? aboutArg : "bitcoin";

    this.router.navigateByUrl(`/everything/${aboutArg}`);
  }

  viewDetails(event: any) {
    this.router.navigateByUrl(`/everything/${this.about}/details/${event}`);
  }
}

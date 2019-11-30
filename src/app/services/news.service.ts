import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private apiKey = "373aec56bcb34d37bacf507fbc89353d";
  private topHeadlines = "https://newsapi.org/v2/top-headlines";
  private everything = "https://newsapi.org/v2/everything";

  constructor(private http: HttpClient) {}

  private mapArticles(articleObj: Object): Article[] {
    const articles: Article[] = [];

    for (let obj of articleObj["articles"]) {
      articles.push(obj);
    }

    return articles;
  }

  getTopHeadlinesInTheUs() {
    return this.http
      .get(`${this.topHeadlines}?country=us&apiKey=${this.apiKey}`)
      .pipe(map(this.mapArticles));
  }
}
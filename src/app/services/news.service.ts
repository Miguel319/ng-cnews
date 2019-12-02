import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

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
      let article: Article = obj;
      article.source = obj.source.name;
      articles.push(article);
    }

    return articles;
  }

  getTopHeadlinesByCountry(country: string): Observable<Article[]> {
    return this.http
      .get(`${this.topHeadlines}?country=${country}&apiKey=${this.apiKey}`)
      .pipe(map(this.mapArticles));
  }

  getEverything(about: string): Observable<Article[]> {
    let response: Observable<Article[]> = undefined;
    const defaultResponse = this.http
      .get(`${this.everything}?q=bitcoin&apiKey=${this.apiKey}`)
      .pipe(map(this.mapArticles));

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    switch (about) {
      case "bitcoin":
        response = defaultResponse;
        break;
      case "apple":
        response = this.http
          .get(
            `${this.everything}?q=apple&from=${year}-${month}-${day}&sortBy=popularity&apiKey=${this.apiKey}`
          )
          .pipe(map(this.mapArticles));
        break;
      case "nyt":
        response = this.http
          .get(
            `${this.everything}?domains=wsj.com,nytimes.com&apiKey=${this.apiKey}`
          )
          .pipe(map(this.mapArticles));
        break;
      default:
        response = defaultResponse;
    }

    return response;
  }
}
